import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css';

const Services = () => {
  const servicesData = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/6798/6798894.png',
      serviceName: 'Mental Wellbeing',
      serviceDescription: 'Building responsive and modern websites for businesses.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/17813/17813842.png',
      serviceName: 'Housekeeping',
      serviceDescription: 'Creating stunning visuals and logos that represent your brand.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/4343/4343363.png',
      serviceName: 'Doctor Appointment',
      serviceDescription: 'Promoting your business through SEO, social media, and ads.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/94/94055.png',
      serviceName: 'Barber Booking',
      serviceDescription: 'Developing mobile applications for Android and iOS.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/2969/2969204.png',
      serviceName: 'Laundry Management',
      serviceDescription: 'Crafting compelling content that engages and converts.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/3063/3063181.png',
      serviceName: 'Ambulance',
      serviceDescription: 'Analyzing data to help you make better business decisions.'
    }
  ];

  return (
    <div className="services-container">
      <h2>Campus Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            serviceName={service.serviceName}
            serviceDescription={service.serviceDescription}
            bookButton={'Book'}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
