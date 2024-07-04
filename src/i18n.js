import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./languages/en/translation.json";
import translationRU from "./languages/ru/translation.json";
import LanguageDetector from "i18next-browser-languagedetector";
import homeEN from './languages/en/home.json';
import homeRU from './languages/ru/home.json';

const resources = {
  en: {
    translation: translationEN,
    home: homeEN,
  },
  ru: {
    translation: translationRU,
    home: homeRU,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    ns: ['common', 'home'],
    defaultNS: 'common',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
