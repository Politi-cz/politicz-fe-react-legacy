import Button from '@mui/material/Button';
import React from 'react';
import './App.scss';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  function changeToEn(): void {
    i18n.changeLanguage('en');
  }

  return (
    <>
      <h1 data-testid="h-trans">{t('welcome')}</h1>
      <Button data-testid="btn-trans" onClick={changeToEn} variant="contained">
        {t('hello_world')}
      </Button>
    </>
  );
}

export default App;
