import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import NavBar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      	<NavBar />
      	<Routes>
        	<Route path="/" element={<Home />} />
      	</Routes>
    </BrowserRouter>
  );
}

export default App;

