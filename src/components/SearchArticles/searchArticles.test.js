import React from 'react';
import { render } from '@testing-library/react';
import SearchArticles from './searchArticles';

it('renders search input correctly', () => {
  const { queryByTitle } = render(<SearchArticles />);
  const container = queryByTitle('search-container');
  expect(container).toBeTruthy();
});
