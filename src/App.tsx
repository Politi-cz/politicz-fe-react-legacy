import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import './App.scss';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('cz');

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  function changeLanguage(): void {
    if (lang === 'cz') {
      setLang('en');
    }

    if (lang === 'en') {
      setLang('cz');
    }
  }

  return (
    <>
      <h1 data-testid="h-trans">{t('welcome')}</h1>
      <Button data-testid="btn-trans" onClick={changeLanguage} variant="contained">
        {t('hello_world')}
      </Button>
    </>
  );
}

export default App;
