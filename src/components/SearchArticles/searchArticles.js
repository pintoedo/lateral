import React, { useState } from 'react';
import * as Yup from 'yup';
import './searchArticles.css';
import NewsCard from '../NewsCard/newsCard';
import FilterBar from '../FilterBar/filterBar';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const request = require('request');

const SearchArticles = () => {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [errors, setErrors] = useState({});

  //Submit handler, first validates the value pasted on the search input, if valid will allow it to submit and call getArticles(value) .

  function handleSubmit(e) {
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
  }

  function handleChange(e) {
    e.preventDefault();
    setQuery(e.target.value);
  }

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
    <div className="layout-container">
      <div className="header">
        <h1>
          ARTI
          <FontAwesomeIcon icon={faSearch} size="1x" />
          LER
        </h1>
      </div>
      <div className="search-container" title="search-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            className="search-input"
            placeholder="Paste a valid url ..."
            required
          />
          <button
            className="search-button"
            type="submit"
            value="Submit"
            label="submit"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
          {errors.query}
        </form>
      </div>
      <FilterBar />
      {
        <div className="cards-container">
          {articles &&
            articles.map((data, i) => (
              <NewsCard title="news-card" data={data} key={i} />
            ))}
        </div>
      }
    </div>
  );
};

export default SearchArticles;
