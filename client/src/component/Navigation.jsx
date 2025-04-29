import React from 'react'

import './Navigation.css';
const Navigation = () => {
  return (
    <>
    <div>
        <nav>
          
            <ul>
              <li className="logo"><h1><a href="/dashboard">Campus Connect</a></h1></li>
                <li><a href="#carousel">Events</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#FreeLancing">Freelancing</a></li>
                <li><a href="#Essentials">Essentials</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navigation