import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AllProductsPage.css';
import ChristmasPage from './ChristmasPage';
import CakesPage from './CakesPage';
import ChocolatePage from './ChocolatePage';
import LactoseFreePage from './LactoseFreePage';

const AllProductsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Reindirizza all'URL appropriato a seconda della pagina attuale
    const path = window.location.pathname; // Ottieni il percorso corrente
    if (path === '/all-products/') {
      navigate('/cakes/');
    } else if (path === '/chocolate/') {
      navigate('/chocolate/');
    } else if (path === '/christmas/') {
      navigate('/christmas/');
    } else if (path === '/lactose-free/') {
      navigate('/lactose-free/');
    }
  }, [navigate]);

  return (
    <div className="all-products-page">
      <h1>Tutti i Prodotti</h1>
      <div className="product-sections">
        <ChristmasPage />
        <CakesPage />
        <ChocolatePage />
        <LactoseFreePage />
      </div>
    </div>
  );
}

export default AllProductsPage;
