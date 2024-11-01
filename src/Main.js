// Main.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Intro from './Intro';
import Products from './Products';
import OrderForm from './OrderForm';
import Footer from './Footer';
import AllProductsPage from './AllProductsPage'; // Pagina per tutti i prodotti
import ChristmasPage from './ChristmasPage'; // Nuova pagina di Natale
import CakesPage from './CakesPage'; // Nuova pagina di Torte
import ChocolatePage from './ChocolatePage'; // Nuova pagina di Cioccolato
import LactoseFreePage from './LactoseFreePage'; // Nuova pagina di Senza Lattosio

function Main() {
  return (
    <Router>
      <Header />
      <Intro />
      <Products />
      <Routes>
        <Route path="/all-products/" element={<AllProductsPage />} />
        <Route path="/christmas/" element={<ChristmasPage />} />
        <Route path="/cakes/" element={<CakesPage />} />
        <Route path="/chocolate/" element={<ChocolatePage />} />
        <Route path="/lactose-free/" element={<LactoseFreePage />} />
      </Routes>
      <OrderForm />
      <Footer />
    </Router>
  );
}

export default Main;
