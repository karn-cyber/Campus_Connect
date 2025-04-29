import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [college, setCollege] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  
    const userExists = existingUsers.find(user => user.email === email);
  
    if (userExists) {
      alert('User already registered with this email!');
    } else {
      const newUser = { name, email, password, college };
      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));
  
      alert('Registration successful!');
      window.location.href = '/login'; // redirect after signup
    }

  };

  return (
    <div className="signup-container">
      <div className="signup-title">
        <h2>Register</h2>
      </div>  
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" 
            onChange={(e) => setName(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" 
            onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label htmlFor="College">College</label>
            <input type="text" id="college" name="college" placeholder="Enter your College Name"
            onChange={(e) => setCollege(e.target.value)} required/>
            </div>

          <button type="submit">Sign Up</button>
        
        </form>
        <div className="Login">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
