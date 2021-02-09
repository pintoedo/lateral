import React, { useContext } from 'react';
import './searchArticles.css';

import { ArticleContext } from '../../ArticleContext';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchArticles = () => {
  const appContext = useContext(ArticleContext);
  const { handleSubmit, handleChange, query, errors } = appContext;
  return (
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
  );
};

export default SearchArticles;
