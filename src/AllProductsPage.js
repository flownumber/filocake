// AllProductsPage.js
import React from 'react';
import './AllProductsPage.css';
import ChristmasPage from './ChristmasPage';
import CakesPage from './CakesPage';
import ChocolatePage from './ChocolatePage';
import LactoseFreePage from './LactoseFreePage';

const AllProductsPage = () => {
  return (
    <div className="all-products-page">
      <h1>Tutti i Prodotti</h1>
      <ChristmasPage />
      <CakesPage />
      <ChocolatePage />
      <LactoseFreePage />
    </div>
  );
}

export default AllProductsPage;
