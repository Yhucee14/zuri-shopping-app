import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products';
import Categories from './components/Categories';
import './index.css';
import CartItems from "./components/CartItems";
import Checkout from './components/Checkout'
import CheckoutSuccess from './components/CheckoutSuccess';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Categories/>} />
          <Route path="/cart" element={<CartItems />} />
          <Route path="/checkout" element={<CheckoutSuccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
