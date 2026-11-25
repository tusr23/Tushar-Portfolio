import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { portfolioDataHi, translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('portfolio_lang') || 'en';
  });

  const setLanguage = (lang) => {
    const validLang = lang.toLowerCase() === 'hi' ? 'hi' : 'en';
    setLanguageState(validLang);
    localStorage.setItem('portfolio_lang', validLang);
  };

  const t = (path, fallback = '') => {
    const keys = path.split('.');
    let current = translations[language] || translations.en;
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // fallback to english
        let fallbackVal = translations.en;
        for (const k of keys) {
          if (fallbackVal && fallbackVal[k] !== undefined) {
            fallbackVal = fallbackVal[k];
          } else {
            return fallback || path;
          }
        }
        return fallbackVal;
      }
    }
    return current;
  };

  const data = language === 'hi' ? portfolioDataHi : portfolioData;

  useEffect(() => {
    document.documentElement.lang = language === 'hi' ? 'hi' : 'en';
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, data }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
