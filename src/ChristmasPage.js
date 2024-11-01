// ChristmasPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChristmasPage.css';

// Importa le immagini
import panettoneClassicoImage from './img/panettone-classico.jpg';
import pandoroNataleImage from './img/pandoro-natale.jpg';

const ChristmasPage = () => {
  const navigate = useNavigate(); // Crea una funzione di navigazione

  useEffect(() => {
    // Reindirizza a /filocake quando la pagina viene ricaricata
    navigate('/filocake');
  }, [navigate]);

  const christmasProducts = [
    { id: 1, name: 'Panettone Classico', description: 'Tradizionale panettone natalizio.', price: '€25.00', image: panettoneClassicoImage },
    { id: 2, name: 'Pandoro di Natale', description: 'Delizioso pandoro decorato per le feste.', price: '€20.00', image: pandoroNataleImage },
    // Aggiungi altri prodotti di Natale
  ];

  return (
    <div className="christmas-page">
      <h2>Prodotti di Natale</h2>
      <div className="product-grid">
        {christmasProducts.map((product) => (
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

export default ChristmasPage;
