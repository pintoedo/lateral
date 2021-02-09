import React, { useContext } from 'react';
import FilterBar from '../FilterBar/filterBar';
import NewsCard from '../NewsCard/newsCard';
import SearchArticles from '../SearchArticles/searchArticles';
import Header from '../Header/Header';
import './Dashboard.css';

import { ArticleContext } from '../../context/ArticleContext';

export const Dashboard = () => {
  const appContext = useContext(ArticleContext);
  let { articles } = appContext;

  return (
    <div className="layout-container">
      <Header />
      <SearchArticles />
      <FilterBar />
      <div className="cards-container">
        {articles &&
          articles.map((data, i) => (
            <NewsCard title="news-card" data={data} key={i} />
          ))}
      </div>
    </div>
  );
};
