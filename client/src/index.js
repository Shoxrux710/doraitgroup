import React, { Suspense } from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import ReactDOM from 'react-dom';
import App from './App';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['uz', 'ru', 'en'],
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  });


const loadingMarkup = (
  <div style={{display: 'flex', textAlign: 'center', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
    <p>Loading...</p>
  </div>
)

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={loadingMarkup}>
        <App />
    </Suspense>
  </Provider>,
  document.getElementById('root')
);
