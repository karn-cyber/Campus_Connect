import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ icon, serviceName, serviceDescription, bookButton, onButtonClick }) => {
  return (
    <div className="servicecard-container">
      <div className="servicecard">
        <div className="servicecard-top">
          <img src={icon} alt="Service Icon" className="servicecard-icon" />
        </div>
        <div className="servicecard-middle">
          <div className="servicecard-title">
            <h3>{serviceName}</h3>
            {/* Attach onButtonClick directly here */}
            <button className="servicecard-button" onClick={onButtonClick}>
              {bookButton}
            </button>
          </div>
          <p className="servicecard-description">{serviceDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
