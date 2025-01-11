import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import global_en from "./translations/en.json";
import global_fr from "./translations/fr.json";
import global_cn from "./translations/cn.json";
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { LanguageProvider, LanguageContext } from "./components/LanguageContext";


i18next.init({
  interpolation: { escapeValue: false },
  lng: "English",
  resources: {
    English: {
      global: global_en
    },
    Français: {
      global: global_fr
    },
    中文: {
      global: global_cn
    }
  },
  returnObjects: true // Ensure returnObjects is true
})

const Root = () => {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    if (language) {
      i18next.changeLanguage(language); // Change language whenever context value changes
    }
  }, [language]); // This hook runs when the language changes

  return (
    <I18nextProvider i18n={i18next}>
      <App /> {/* App component will now have the correct language */}
    </I18nextProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <Root />
    </LanguageProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

