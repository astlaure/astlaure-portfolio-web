import React from 'react';
import { getI18n } from 'react-i18next';

interface Props {}

const Navbar: React.FC<Props> = (props) => {

  const handleClick = async (lng: 'en' | 'fr') => {
    await getI18n().changeLanguage(lng);
  };

  return (
    <nav>
      <button type="button" onClick={() => handleClick('en')}>EN</button>
      <div className="separator" />
      <button type="button" onClick={() => handleClick('fr')}>FR</button>
    </nav>
  );
};

export default Navbar;
