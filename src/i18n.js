import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./languages/en/translation.json";
import translationRU from "./languages/ru/translation.json";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
