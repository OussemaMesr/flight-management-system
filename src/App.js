import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Accueil from './components/Accueil';
import FlightAuthorizationForm from './components/FlightAuthorizationForm';
import AddFlight from './components/AddFlight';
import FlightList from './components/FlightList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/flight-authorization-form" element={<FlightAuthorizationForm />} />
        <Route path="/add-flight" element={<AddFlight />} />
        <Route path="/flight-list" element={<FlightList />} />
      </Routes>
    </Router>
  );
};

export default App;
