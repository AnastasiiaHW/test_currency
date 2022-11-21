import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

test('renders learn react link', () => {
  render(<Loader />);
  const loaderElement = screen.getByTestId('loader');
  expect(loaderElement).toBeInTheDocument();
});
