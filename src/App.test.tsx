import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import config from './i18n/config';
import { I18nextProvider } from 'react-i18next';

test('Should render components', () => {
  const app = render(
    <I18nextProvider i18n={config}>
      <App />
    </I18nextProvider>
  );

  expect(app).toBeDefined();
});
