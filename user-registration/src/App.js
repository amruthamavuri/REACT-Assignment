import React from 'react';
import Registration from './components/Registration.js';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage.js';

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Router>
  );
}


export default App;