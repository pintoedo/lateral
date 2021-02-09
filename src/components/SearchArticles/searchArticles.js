import React, { useContext } from 'react';
import { ArticleContext } from '../../context/ArticleContext';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const SearchArticles = () => {
  const appContext = useContext(ArticleContext);
  const { handleSubmit, handleChange, query, errors } = appContext;
  return (
    <SearchContainer>
      <form onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Paste a valid url ..."
          required
        />
        <SearchButton
          className="search-button"
          type="submit"
          value="Submit"
          label="submit"
        >
          <FontAwesomeIcon icon={faSearch} />
        </SearchButton>
        {errors.query}
      </form>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  margin: 5px;
`;

const SearchInput = styled.input`
  width: 450px;
  border: 3px solid#0083ee;
  padding: 5px;
  height: 20px;
  outline: none;
  border-radius: 5px 0 0 5px;
  color: #9dbfaf;
`;

const SearchButton = styled.button`
  width: 32px;
  height: 36px;
  border: 2px solid #0083ee;
  border-radius: 0 5px 5px 0;
  background: #0083ee;
  text-align: center;
  color: #fff;
  cursor: pointer;
`;

export default SearchArticles;
