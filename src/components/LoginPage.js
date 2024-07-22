import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate('/accueil');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Flight_Authorization_App</h1>
        <header className="page-header">
          <h2>Login</h2>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="login-form">
            <input type="text" id="email" name="email" placeholder="Email Address" required />
            <input type="password" id="email" name="password" placeholder="mot de pass" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <footer>
        <p>Contact us: 123-456-7890 | Flight_Authorization_App@gmail.com</p>
        <p>&copy; 2024 Flight Authorization App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LoginPage;
