import React from 'react';
import './AllProductsPage.css';
import ChristmasPage from './ChristmasPage';
import CakesPage from './CakesPage';
import ChocolatePage from './ChocolatePage';
import LactoseFreePage from './LactoseFreePage';

const AllProductsPage = () => {
  return (
    <div className="all-products-page">
      <h1 className="tutti">Tutti i Prodotti</h1>
      <div className="product-sections">
        {/* Passa la prop embedded */}
        <ChristmasPage embedded={true} />
        <CakesPage embedded={true} />
        <ChocolatePage embedded={true} />
        <LactoseFreePage embedded={true} />
      </div>
    </div>
  );
}

export default AllProductsPage;