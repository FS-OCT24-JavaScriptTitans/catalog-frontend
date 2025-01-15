import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ua from './locales/ua.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en, ua },
    lng: 'ua',
    fallbackLng: 'ua',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
    },
  });
export default i18n;
