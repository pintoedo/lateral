import React, { useEffect, useState } from 'react';
import './layout.css';
import NewsCard from '../NewsCard/newsCard';
import getArticles from '../../services/apiService';

const request = require('request');

const Layout = () => {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted', e.target.value, 'query: ', query);
    getArticles(query);
  }

  function handleChange(e) {
    e.preventDefault();
    setQuery(e.target.value);
    console.log(e.target.value);
  }

  const url =
    'https://www.vice.com/en/article/y3ge9k/cops-pepper-sprayed-a-9-year-old-girl-and-told-her-she-was-acting-like-a-child';

  const getRecommendations = (str) => {
    var options = {
      method: 'POST',
      url: 'https://news-api.lateral.io/documents/similar-to-text',
      headers: {
        'content-type': 'application/json',
        'subscription-key': 'f53dd4aea5bfc8ecd850fcbe1b08921e',
      },
      body: {
        text: str,
      },
      json: true,
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      setArticles(body);
    });
  };

  const getArticles = async (str) => {
    var options = {
      method: 'GET',
      url: 'https://document-parser-api.lateral.io/',
      qs: {
        url: str,
      },
      headers: {
        'content-type': 'application/json',
        'subscription-key': 'f53dd4aea5bfc8ecd850fcbe1b08921e',
      },
    };
    await request(options, function (error, response, body) {
      if (error) throw new Error(error);
      let parsed = JSON.parse(body);
      let stringed = JSON.stringify(parsed.body);
      return getRecommendations(stringed);
    });
  };

  return (
    <div className="layout-container">
      <h1>Later</h1>
      <form onSubmit={handleSubmit}>
        <label>
          INSERT URL:
          <input type="text" value={query} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {articles ? (
        <div className="cards">
          {articles.map((data, index) => (
            <NewsCard data={data} />
          ))}
        </div>
      ) : (
        <div>
          <h1>LOADING...</h1>
        </div>
      )}
    </div>
  );
};

export default Layout;
