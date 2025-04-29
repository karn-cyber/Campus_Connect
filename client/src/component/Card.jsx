import React from 'react';
import "./Card.css";

const Card = ({ eventName, eventDate, eventDescription }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-top">
          <img
            src="https://www.yorkwallcoverings.com/cdn/shop/collections/YWDC17OliveBranch_ME1537-cropped_1_c1e2f4ab-c979-42d0-b681-1c89f66adab0.jpg?v=1629381437&width=2000"
            alt=""
          />
        </div>
        <div className="card-bottom">
          <h3>{eventName}</h3>

          <div className="event-info">
            <span>{eventDate}</span>
            <span className="register">
              <button>Register</button>
            </span>
          </div>

          <p>{eventDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
