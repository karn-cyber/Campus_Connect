import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
      alert('Login successful!');
      // Optionally store logged-in user info
      localStorage.setItem('loggedInUser', JSON.stringify(validUser));
      // Redirect to home/dashboard
      window.location.href = '/dashboard'; 
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Enter your email" 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="Enter your password" 
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-3">Login</button>
        </form>
        <div className="register-link"><h6>Don't have an account? <a href="/register">Sign Up</a></h6></div>
      </div>
    </div>
  );
};

export default Login;
