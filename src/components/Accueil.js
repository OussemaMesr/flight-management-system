import React from 'react';
import { Link } from 'react-router-dom';
import './Accueil.css';

const Accueil = () => {
  return (
    <div>
      <h3>Welcome to the Flight Management System</h3>
      <nav>
        <ul>
          <li>
            <Link to="/flight-authorization-form">Submit Flight Authorization Request</Link>
          </li>
          <li>
            <Link to="/add-flight">Add New Flight</Link>
          </li>
          <li>
            <Link to="/flight-list">View Existing Flights</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Accueil;
