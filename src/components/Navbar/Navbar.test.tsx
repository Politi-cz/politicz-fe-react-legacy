import { render } from '@testing-library/react';
import React from 'react';
import { Navbar } from './Navbar';
import config from '../../i18n/config';
import { I18nextProvider } from 'react-i18next';
import { screen } from '@testing-library/dom';

test('It should render navbar', () => {
  render(
    <I18nextProvider i18n={config}>
      <Navbar />
    </I18nextProvider>
  );

  const navbar = screen.getByTestId('topNavigation');

  expect(navbar).toBeInTheDocument();
});

test('Home tab should be translated to czech', () => {
  render(
    <I18nextProvider i18n={config}>
      <Navbar />
    </I18nextProvider>
  );

  const homeTab = screen.getByTestId('homeTab');

  expect(homeTab).toHaveTextContent(/hlavní stránka/i);
});
