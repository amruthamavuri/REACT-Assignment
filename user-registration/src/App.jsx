import React from 'react';
import Registration from './components/Registration.jsx';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';

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