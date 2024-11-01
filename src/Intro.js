// Intro.js
import React from 'react';
import './Intro.css';

function Intro() {
  return (
    <section className="intro">
      <div className="image-carousel">
        {/* Contenitore per le immagini scorrevoli */}
        <div className="carousel-track">
          <img src="img/front.jpg" alt="Dolce 1" />
          <img src="img/front1.jpg" alt="Dolce 2" />
          <img src="img/front2.jpg" alt="Dolce 3" />
          <img src="img/front3.jpg" alt="Dolce 4" />
          <img src="img/front2.jpg" alt="Dolce 5" />
          <img src="img/front5.jpg" alt="Dolce 6" />
          <img src="img/front6.jpg" alt="Dolce 7" />
          <img src="img/front.jpg" alt="Dolce 8" />
        </div>
      </div>
      <div className="intro-text">
        <h2>Benvenuti su Filocake</h2>
        <p>La tua pasticceria online con articoli da bar e dolci per feste!</p>
      </div>
    </section>
  );
}

export default Intro;
