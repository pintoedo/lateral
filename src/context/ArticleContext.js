import React, { useState, createContext } from 'react';
import * as Yup from 'yup';

const request = require('request');

export const ArticleContext = createContext();

export const ArticleProvider = (props) => {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [errors, setErrors] = useState({});

  const articlesRecent = articles.sort(
    (a, b) => Date.parse(b.published) - Date.parse(a.published),
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Url input validation, it will reject query that doesn't containt typical characters in a url.
    const querySchema = Yup.object().shape({
      query: Yup.string()
        .required('Mandatory field')
        .matches(
          /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
          'Please enter a valid URL',
        ),
    });
    try {
      querySchema.validateSync(
        {
          query,
        },
        { abortEarly: false },
      );
      getArticles(query);
    } catch (err) {
      const { inner } = err;
      let formErrors = {};

      if (inner && inner[0]) {
        inner.forEach((error) => {
          const { path, message } = error;

          if (!formErrors[path]) {
            formErrors[path] = message;
          }
        });
      }
      setErrors(formErrors);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  // Receives the output from GetArticles (body text of an article) and returns recommendations based on similar-to-text API.
  const getRecommendations = (str) => {
    const options = {
      method: 'POST',
      url: 'https://news-api.lateral.io/documents/similar-to-text',
      headers: {
        'content-type': 'application/json',
        'subscription-key': process.env.REACT_APP_API_KEY,
      },
      body: {
        text: str,
      },
      json: true,
    };
    request(options, function (error, res, body) {
      if (error) throw new Error(error);
      setArticles(body);
    });
  };

  //Receives url from an article and extracts the body (text). Finally calls getRecommendations() passing the text to it.
  const getArticles = async (str) => {
    const options = {
      method: 'GET',
      url: 'https://document-parser-api.lateral.io/',
      qs: {
        url: str,
      },
      headers: {
        'content-type': 'application/json',
        'subscription-key': process.env.REACT_APP_API_KEY,
      },
    };
    await request(options, function (error, res, body) {
      if (error) throw new Error(error);
      let parsed = JSON.parse(body);
      let stringed = JSON.stringify(parsed.body);
      return getRecommendations(stringed);
    });
  };

  return (
    <ArticleContext.Provider
      value={{
        query,
        articles,
        errors,
        handleChange,
        handleSubmit,
        articlesRecent,
      }}
    >
      {props.children}
    </ArticleContext.Provider>
  );
};
