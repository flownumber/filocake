// Main.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import App from './App'; // Homepage principale
import AllProductsPage from './AllProductsPage'; // Pagina per tutti i prodotti
import ChristmasPage from './ChristmasPage'; // Nuova pagina di Natale
import CakesPage from './CakesPage'; // Nuova pagina di Torte
import ChocolatePage from './ChocolatePage'; // Nuova pagina di Cioccolato
import LactoseFreePage from './LactoseFreePage'; // Nuova pagina di Senza Lattosio

function Main() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/all-products" element={<AllProductsPage />} />
        <Route path="/christmas" element={<ChristmasPage />} />
        <Route path="/cakes" element={<CakesPage />} />
        <Route path="/chocolate" element={<ChocolatePage />} />
        <Route path="/lactose-free" element={<LactoseFreePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Main;
