// LactoseFreePage.js
import React from 'react';
import './LactoseFreePage.css';

// Importa le immagini
import biscottiSenzaLattosioImage from './img/biscotti-senza-lattosio.jpg';
import tortaSenzaLattosioImage from './img/torta-senza-lattosio.jpg';

const LactoseFreePage = () => {
  const lactoseFreeProducts = [
    { id: 1, name: 'Biscotti Senza Lattosio', description: 'Deliziosi biscotti senza lattosio.', price: '€10.00', image: biscottiSenzaLattosioImage },
    { id: 2, name: 'Torta Senza Lattosio', description: 'Torta leggera e soffice senza lattosio.', price: '€25.00', image: tortaSenzaLattosioImage },
    // Aggiungi altri prodotti senza lattosio
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
