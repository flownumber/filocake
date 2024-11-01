import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChristmasPage.css';

// Importa le immagini
import panettoneClassicoImage from './img/panettone-classico.jpg';
import pandoroNataleImage from './img/pandoro-natale.jpg';

const ChristmasPage = () => {
  const navigate = useNavigate(); // Crea una funzione di navigazione
  const [hasNavigated, setHasNavigated] = useState(false); // Stato per tracciare il reindirizzamento

  useEffect(() => {
    if (!hasNavigated) {
      setHasNavigated(true); // Imposta lo stato per evitare reindirizzamenti futuri
      navigate('/christmas/'); // Reindirizza a /filocake
    }
  }, [navigate, hasNavigated]);

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
