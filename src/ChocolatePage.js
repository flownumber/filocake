// ChocolatePage.js
import React from 'react';
import './ChocolatePage.css';

const ChocolatePage = () => {
  const chocolates = [
    { id: 1, name: 'Tavoletta di Cioccolato Fondente', description: 'Tavoletta di cioccolato fondente al 70%.', price: '€5.00', image: 'img/cioccolato-fondente.jpg' },
    { id: 2, name: 'Cioccolatini Assortiti', description: 'Assortimento di cioccolatini artigianali.', price: '€15.00', image: 'img/cioccolatini.jpg' },
    // Aggiungi altri cioccolati
  ];

  return (
    <div className="chocolate-page">
      <h2>Prodotti al Cioccolato</h2>
      <div className="product-grid">
        {chocolates.map((chocolate) => (
          <div key={chocolate.id} className="product-card">
            <img src={chocolate.image} alt={chocolate.name} className="product-image" />
            <h3 className="product-name">{chocolate.name}</h3>
            <p className="product-description">{chocolate.description}</p>
            <p className="product-price">{chocolate.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChocolatePage;
