import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationCZ from './cz/translations.json';
import translationEN from './en/translation.json';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  cz: {
    translation: translationCZ
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'cz',
    lng: 'cz',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
