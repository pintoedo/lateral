import React, { useContext } from 'react';
import FilterBar from '../FilterBar/filterBar';
import NewsCard from '../NewsCard/newsCard';
import SearchArticles from '../SearchArticles/searchArticles';
import './Dashboard.css';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ArticleContext } from '../../ArticleContext';

export const Dashboard = () => {
  const appContext = useContext(ArticleContext);
  const { articles } = appContext;

  return (
    <div className="layout-container">
      <div className="cards-container">
        <div className="header">
          <h1>
            ARTI
            <FontAwesomeIcon icon={faSearch} size="1x" />
            LER
          </h1>
        </div>{' '}
        <SearchArticles />
        <FilterBar />
        {articles &&
          articles.map((data, i) => (
            <NewsCard title="news-card" data={data} key={i} />
          ))}
      </div>
    </div>
  );
};
