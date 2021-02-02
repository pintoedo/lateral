import React, { useState } from 'react';
import './searchArticles.css';
import NewsCard from '../NewsCard/newsCard';

const request = require('request');

const SearchArticles = () => {
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
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      setArticles(body);
    });
  };

  const getArticles = async (str) => {
    console.log(process);
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
    await request(options, function (error, response, body) {
      if (error) throw new Error(error);
      let parsed = JSON.parse(body);
      let stringed = JSON.stringify(parsed.body);
      return getRecommendations(stringed);
    });
  };

  return (
    <div className="layout-container">
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <label>
            Similar Articles
            <input type="text" value={query} onChange={handleChange} />
          </label>
          <button type="submit" value="Submit">
            Search
          </button>
        </form>
      </div>
      {
        <div className="cards-container">
          {articles.map((data, index) => (
            <NewsCard data={data} />
          ))}
        </div>
      }
    </div>
  );
};

export default SearchArticles;
