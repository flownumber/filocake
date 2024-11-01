// CakesPage.js
import React from 'react';
import './CakesPage.css';

const CakesPage = () => {
  const cakes = [
    { id: 1, name: 'Torta al Cioccolato', description: 'Squisita torta al cioccolato fondente.', price: '€30.00', image: 'img/torta-cioccolato.jpg' },
    { id: 2, name: 'Torta di Mele', description: 'Classica torta di mele con pasta frolla.', price: '€28.00', image: 'img/torta-mele.jpg' },
    // Aggiungi altre torte
  ];

  return (
    <div className="cakes-page">
      <h2>Torte Forno</h2>
      <div className="product-grid">
        {cakes.map((cake) => (
          <div key={cake.id} className="product-card">
            <img src={cake.image} alt={cake.name} className="product-image" />
            <h3 className="product-name">{cake.name}</h3>
            <p className="product-description">{cake.description}</p>
            <p className="product-price">{cake.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CakesPage;
