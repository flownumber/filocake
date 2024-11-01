import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CakesPage.css';

// Importa le immagini
import tortaCioccolatoImage from './img/torta-cioccolato.jpg';
import tortaMeleImage from './img/torta-mele.jpg';

const CakesPage = ({ embedded }) => {
  const navigate = useNavigate();
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    // Esegui il reindirizzamento solo se non è integrato in AllProductsPage
    if (!embedded && !hasNavigated) {
      setHasNavigated(true);
      navigate('/cakes');
    }
  }, [navigate, hasNavigated, embedded]);

  const cakes = [
    { id: 1, name: 'Torta al Cioccolato', description: 'Squisita torta al cioccolato fondente.', price: '€30.00', image: tortaCioccolatoImage },
    { id: 2, name: 'Torta di Mele', description: 'Classica torta di mele con pasta frolla.', price: '€28.00', image: tortaMeleImage },
    // Aggiungi altre torte
  ];

  return (
    <div className="cakes-page">
      <h2 className="bisco">Torte Forno</h2>
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
