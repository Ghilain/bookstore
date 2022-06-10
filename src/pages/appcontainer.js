import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './hom';
import Categorypage from './categories';
import Navbar from './Navbar';

const BookstoreContainer = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<Categorypage />} />
    </Routes>
  </div>

);

export default BookstoreContainer;
