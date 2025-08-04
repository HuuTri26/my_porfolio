import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
    >
      {language === 'vi' ? 'EN' : 'VI'}
    </button>
  );
};

export default LanguageSwitcher;
