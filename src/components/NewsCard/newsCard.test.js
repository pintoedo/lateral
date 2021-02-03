import React from 'react';
import { render } from '@testing-library/react';
import NewsCard from './newsCard';

const mockPosts = { id: 1, similarity: 23123123, title: 'TEST1' };

it('renders correctly', () => {
  const { queryByTitle } = render(<NewsCard data={mockPosts} />);
  const card = queryByTitle('card-test');
  expect(card).toBeTruthy();
});
