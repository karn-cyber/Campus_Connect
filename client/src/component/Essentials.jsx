import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css';

const Services = () => {
  const servicesData = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/2083/2083335.png',
      serviceName: 'Club Recruitments',
      serviceDescription: 'Apply to join clubs that match your skills and interests'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/9043/9043247.png',
      serviceName: 'Volunteering',
      serviceDescription: 'Contribute to social causes and build your portfolio'
    },
    {
        icon :"https://cdn-icons-png.flaticon.com/128/2408/2408265.png",
      serviceName: 'Freelancing Hub',
      serviceDescription: 'Find student gigs or offer your services to peers'
    }
  ];

  return (
    <div className="services-container">
      <h2>Opportunities</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            serviceName={service.serviceName}
            serviceDescription={service.serviceDescription}
            bookButton={'Explore'}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
