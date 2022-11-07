
import './App.css';

import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import  Home from './pages/Home';

import Cart from './pages/Cart';

import Sale from './pages/Sale';

import SingleProduct from  './pages/SingleProduct';

import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <BrowserRouter>

      <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/single-product' element={<SingleProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/sale' element={<Sale />} />
        </Routes>
      
      
      </BrowserRouter>
  
    </div>
  );
}

export default App;
