import React from 'react';
import '../App.css';
import logoFooter from '../images/logo_kasa-footer.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
        <img src={logoFooter} alt="logo de kasa en pied de page" />
        <p>© {currentYear} Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
