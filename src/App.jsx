import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar/index';
import Home from './pages/Home';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      <AppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
