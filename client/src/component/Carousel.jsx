import React, { useState } from 'react';
import Card from './Card'; 
import './Carousel.css';

const Carousel = () => {
  const events = [
    {
      name: 'Open Mic',
      date: '01-05-2025',
      description: 'Join us on the Friday Night to showcase the best of your talent!'
    },
    {
      name: 'Drone Workshop',
      date: '07-05-2025',
      description: 'Dive into the future with AI and Robotics workshops.'
    },
    {
      name: 'Astrophysics Quiz',
      date: '15-05-2025',
      description: 'Compete in a battle of cosmic knowledge!'
    },
    {
      name: 'Student Innovation Council (SIC) Onboarding',
      date: '25-05-2025',
      description: 'Tech Projects and Ideas'
    },
    {
      name: 'Go For Gold : IOI Bootcamp',
      date: '25-05-2025',
      description:'Register to be a part of the core committee of Go for Gold'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <Card 
        eventName={events[currentIndex].name}
        eventDate={events[currentIndex].date}
        eventDescription={events[currentIndex].description}
      />
      <button className="nav-button left" onClick={handlePrev}>&lt;</button>
      <button className="nav-button right" onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default Carousel;
