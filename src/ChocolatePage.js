import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChocolatePage.css';

// Importa le immagini
import cioccolatoFondenteImage from './img/cioccolato-fondente.jpg';
import cioccolatiniImage from './img/cioccolatini.jpg';

const ChocolatePage = () => {
  const navigate = useNavigate(); // Crea una funzione di navigazione
  const [hasNavigated, setHasNavigated] = useState(false); // Stato per tracciare il reindirizzamento

  useEffect(() => {
    if (!hasNavigated) {
      setHasNavigated(true); // Imposta lo stato per evitare reindirizzamenti futuri
      navigate('/chocolate/'); // Reindirizza a /filocake
    }
  }, [navigate, hasNavigated]);

  const chocolates = [
    { id: 1, name: 'Tavoletta di Cioccolato Fondente', description: 'Tavoletta di cioccolato fondente al 70%.', price: '€5.00', image: cioccolatoFondenteImage },
    { id: 2, name: 'Cioccolatini Assortiti', description: 'Assortimento di cioccolatini artigianali.', price: '€15.00', image: cioccolatiniImage },
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
