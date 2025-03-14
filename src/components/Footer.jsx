// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer 
      style={{ 
        backgroundColor: "#FFFFFF", 
        color: "#222222", 
        padding: "1rem 0", 
        textAlign: "center", 
        borderTop: "1px solid #eaeaea" 
      }}
    >
      <p>© {new Date().getFullYear()} Ulysse Trin - Tous droits réservés</p>
      <div>
        <a 
          href="https://www.linkedin.com/in/tonprofil" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: "#222222", margin: "0 0.5rem", textDecoration: "none" }}
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/tonprofil" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: "#222222", margin: "0 0.5rem", textDecoration: "none" }}
        >
          GitHub
        </a>
        <a 
          href="mailto:ulysse.trin@hotmail.fr" 
          style={{ color: "#222222", margin: "0 0.5rem", textDecoration: "none" }}
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
