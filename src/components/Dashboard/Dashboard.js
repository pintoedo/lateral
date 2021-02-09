import React, { useContext } from 'react';
import styled from 'styled-components';

import FilterBar from '../FilterBar/filterBar';
import NewsCard from '../NewsCard/newsCard';
import SearchArticles from '../SearchArticles/searchArticles';
import Header from '../Header/Header';

import { ArticleContext } from '../../context/ArticleContext';

export const Dashboard = () => {
  const appContext = useContext(ArticleContext);
  let { articles } = appContext;

  return (
    <Wrapper className="layout-container">
      <Header />
      <SearchArticles />
      <FilterBar />
      <div className="cards-container">
        {articles &&
          articles.map((data, i) => (
            <NewsCard title="news-card" data={data} key={i} />
          ))}
      </div>
    </Wrapper>
  );
};

//Styling

const Wrapper = styled.div`
  width: 500px;
  position: absolute;
`;
