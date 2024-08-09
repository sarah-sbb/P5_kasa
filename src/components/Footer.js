// Footer.js
import React from 'react';
import '../App.css';
import logoFooter from '../images/logo_kasa-footer.svg';

const Footer = () => {
  return (
    <footer className="footer">
        <img src={logoFooter} alt="logo de kasa en pied de page" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
