import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";


// Language

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({

    detection: {
      order: [
        "cookie",
        "htmlTag",
        "queryString",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend:{
      loadPath: '/locale/{{lng}}/translation.json',
    }
  });
  export {i18n};