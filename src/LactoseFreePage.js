// LactoseFreePage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LactoseFreePage.css';

// Importa le immagini usando il percorso corretto
import biscottiSenzaLattosioImage from './img/biscotti-senza-lattosio.jpg';
import tortaSenzaLattosioImage from './img/torta-senza-lattosio.jpg';

const LactoseFreePage = () => {
  const navigate = useNavigate(); // Crea una funzione di navigazione

  useEffect(() => {
    // Reindirizza a /filocake quando la pagina viene ricaricata
    navigate('/filocake');
  }, [navigate]);

  const lactoseFreeProducts = [
    { id: 1, name: 'Biscotti Senza Lattosio', description: 'Deliziosi biscotti senza lattosio.', price: '€10.00', image: biscottiSenzaLattosioImage },
    { id: 2, name: 'Torta Senza Lattosio', description: 'Torta leggera e soffice senza lattosio.', price: '€25.00', image: tortaSenzaLattosioImage },
  ];

  return (
    <div className="lactose-free-page">
      <h2>Prodotti Senza Lattosio</h2>
      <div className="product-grid">
        {lactoseFreeProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LactoseFreePage;
