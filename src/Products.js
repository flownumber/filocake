import React from 'react';

function Products() {
  return (
    <section className="products py-12 bg-pink-100">
      <h3 className="text-2xl font-bold text-center mb-8">Prodotti disponibili</h3>
      <div className="product-list flex justify-center gap-8 flex-wrap">
        <div className="product bar-products relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden w-64 h-64 transform transition-transform hover:scale-105 hover:shadow-2xl"
             style={{ backgroundImage: "url('img/corne.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
            <h4 className="text-xl font-semibold">Articoli da Bar</h4>
            <p className="mt-2 text-sm">Cornetti, pasticcini, e altre delizie per il tuo bar.</p>
          </div>
        </div>
        <div className="product festive-cakes relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden w-64 h-64 transform transition-transform hover:scale-105 hover:shadow-2xl"
             style={{ backgroundImage: "url('img/torte.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
            <h4 className="text-xl font-semibold">Dolci per Feste</h4>
            <p className="mt-2 text-sm">Torte personalizzate per compleanni, anniversari e altre occasioni speciali.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
