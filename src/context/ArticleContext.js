import React, { useState, createContext } from 'react';
import querySchema from '../validations/validations';
import { getArticles } from '../apiService';

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
    try {
      querySchema.validateSync(
        {
          query,
        },
        { abortEarly: false },
      );
      getArticles(query, setArticles);
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
