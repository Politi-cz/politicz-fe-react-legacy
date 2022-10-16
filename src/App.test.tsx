import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import config from './i18n/config';
import { I18nextProvider } from 'react-i18next';

test('Hello world button is on page', () => {
  render(<App />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});

test('Heading and button is translated to CZ', () => {
  render(
    <I18nextProvider i18n={config}>
      <App />
    </I18nextProvider>
  );

  const heading = screen.getByTestId('h-trans');
  const button = screen.getByTestId('btn-trans');

  expect(heading).toHaveTextContent('Vítejte na politicz');
  expect(button).toHaveTextContent('Ahoj světe!');
});

test('Heading and button is translated to EN after clicking button', () => {
  render(
    <I18nextProvider i18n={config}>
      <App />
    </I18nextProvider>
  );

  const heading = screen.getByTestId('h-trans');
  const button = screen.getByTestId('btn-trans');

  fireEvent.click(button);

  expect(heading).toHaveTextContent('Welcome to politicz');
  expect(button).toHaveTextContent('Hello world!');
});
