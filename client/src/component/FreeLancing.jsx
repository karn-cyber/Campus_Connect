import React, { useState } from 'react';
import ServiceCard from './ServiceCard'; // Importing your new ServiceCard
import './FreeLancing.css'; // Styling file

const FreeLancing = () => {
  const freeLancingOpportunities = [
    {
      title: 'UI/UX Designer',
      company: 'NewBotics',
      description: 'Need to design the whole website, 2-month long opportunity.',
      addedBy: 'Riya Sharma',
      date: '01-06-2025',
      icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png', // sample icon
    },
    {
      title: 'Content Writer',
      company: 'EduTech Labs',
      description: 'Write creative blogs and articles related to edtech.',
      addedBy: 'Aman Gupta',
      date: '05-06-2025',
      icon: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png', 
    },
    {
      title: 'Frontend Developer',
      company: 'SmartHome Solutions',
      description: 'Work on React-based dashboard for Smart Homes.',
      addedBy: 'Sneha Verma',
      date: '10-06-2025',
      icon: 'https://cdn-icons-png.flaticon.com/512/919/919851.png',
    },
    {
      title: 'Social Media Manager',
      company: 'Startup Buzz',
      description: 'Manage Instagram, LinkedIn pages with creative posts.',
      addedBy: 'Vikas Mehra',
      date: '12-06-2025',
      icon: 'https://cdn-icons-png.flaticon.com/512/747/747376.png',
    }
  ];

  const [selectedOpportunity, setSelectedOpportunity] = useState(null);

  const handleApplyClick = (opportunity) => {
    setSelectedOpportunity(opportunity);
  };

  return (
    <>
    <h2>Freelancing Opportunities</h2>
    <div className="freelancing-page">
      <div className="freelancing-opportunities">
        {freeLancingOpportunities.map((opportunity, index) => (
          <div key={index} className="opportunity-card">
            <ServiceCard 
              icon={opportunity.icon}
              serviceName={`${opportunity.title} @ ${opportunity.company}`}
              serviceDescription={opportunity.description}
              bookButton="Apply"
              onButtonClick={() => handleApplyClick(opportunity)}
            />
            <p className="posted-by">Posted by: {opportunity.addedBy} </p>
            <p className='on'>On: {opportunity.date}</p>
          </div>

        ))}
      </div>

      {selectedOpportunity && (
        <div className="chatbox">
          <h3>Chat with {selectedOpportunity.addedBy}</h3>
          <div className="chat-messages">
            <p>Hi, I am interested in the "{selectedOpportunity.title}" opportunity!</p>
          </div>
          <input type="text" placeholder="Type your message..." className="chat-input" />
          <button className="send-button">Send</button>
        </div>
      )}
    </div>
    </>
  );
};

export default FreeLancing;
