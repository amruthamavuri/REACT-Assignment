import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; 

function LandingPage() {
  return (
    <div className="landing-container">
      <nav className="menu">
        <h2>MyApp</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>

      <div className="welcome">
        <h1>Welcome to MyApp 🚀</h1>
        <p>Please register to get started.</p>
        <Link to="/register">
          <button className="register-btn">Go to Registration</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
