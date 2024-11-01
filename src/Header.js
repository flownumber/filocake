import React, { useState } from 'react';
import './Header.css';
import logo from './img/logo.png'; // Assicurati di inserire il percorso corretto del logo

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Stato per gestire la visibilità del menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna la visibilità del menu
  };

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo Filocake" className="logo-img" />
        <h1>Filocake</h1>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        {isMenuOpen ? 'Chiudi Menu' : 'Apri Menu'}
      </button>
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#all-products">Tutti Prodotti</a></li>
          <li><a href="#christmas">Natale</a></li>
          <li><a href="#baked">Lievitati</a></li>
          <li><a href="#cakes">Torte Forno</a></li>
          <li><a href="#chocolate">Cioccolato</a></li>
          <li><a href="#lactose-free">Senza Lattosio</a></li>
          <li><a href="#others">Altro</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
