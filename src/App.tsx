import React from 'react';
import { Login } from './components/LoginPage';
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './components/HomePage';
import { RegPage } from './components/RegPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegPage />} />
    </Routes>
  );
}

export default App;
