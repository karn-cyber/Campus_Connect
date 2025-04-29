import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation(); // get current path

  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <nav>
        <ul>
          <li className="logo">
            <h1><Link to="/dashboard">Campus Connect</Link></h1>
          </li>
          <li>
            <a href="./dashboard" className={isActive('/events') ? 'active' : ''}>Events</a>
          </li>
          <li>
            <a href="/Services" className={isActive('/services') ? 'active' : ''}>Services</a>
          </li>
          <li>
            <a href="/FreeLancing" className={isActive('/freelancing') ? 'active' : ''}>Freelancing</a>
          </li>
          <li>
            <a href="/Essentials" className={isActive('/essentials') ? 'active' : ''}>Essentials</a>
          </li>
          <li>
            <Link to="/profile" className={isActive('/profile') ? 'active' : ''}>Profile</Link>
          </li>
          <li>
            < Link to="./logout" className={isActive('/logout') ? 'active logout' : 'logout'} style={{color: 'white'}}>Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
