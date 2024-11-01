import React from 'react';
import Header from './Header';
import Intro from './Intro';
import Products from './Products';
import OrderForm from './OrderForm';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Products />
      <OrderForm />
      <Footer />
    </div>
  );
}

export default App;
