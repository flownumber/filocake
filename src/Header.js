// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './img/logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/filocake/"> {/* Link alla homepage */}
          <img src={logo} alt="Logo Filocake" className="logo-img" />
          <h1>Filocake</h1>
        </Link>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        {isMenuOpen ? 'Chiudi Menu' : 'Apri Menu'}
      </button>
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/all-products">Tutti Prodotti</Link></li>
          <li><Link to="/christmas">Natale</Link></li>
          <li><Link to="/cakes">Torte Forno</Link></li>
          <li><Link to="/chocolate">Cioccolato</Link></li>
          <li><Link to="/lactose-free">Senza Lattosio</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
