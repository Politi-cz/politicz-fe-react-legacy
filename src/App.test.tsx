import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Hello world button is on page', () => {
  render(<App />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});

test('Button contains Hello world! text', () => {
  render(<App />);

  const button = screen.getByRole('button');
  expect(button).toHaveTextContent(/hello world!/i);
});
