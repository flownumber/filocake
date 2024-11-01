import React, { useState } from 'react';
import './OrderForm.css';

function OrderForm() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [orderDescription, setOrderDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logica di invio ordine, come chiamata API o altro
    console.log("Ordine inviato:", { email, phone, orderDescription });
    alert('Ordine inviato con successo!');
    // Resetta i campi del form dopo l'invio
    setEmail('');
    setPhone('');
    setOrderDescription('');
  };

  return (
    <section className="order-form">
      <h3>Effettua un Ordine</h3>
      <p>Ordina i tuoi dolci preferiti con un semplice click!</p>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Numero di Telefono:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <label>
          Descrizione Ordine:
          <textarea
            value={orderDescription}
            onChange={(e) => setOrderDescription(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="order-button">Invia Ordine</button>
      </form>
    </section>
  );
}

export default OrderForm;
