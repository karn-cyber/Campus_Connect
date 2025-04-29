import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import './Services.css';

const Happening = () => {
  const [activeTab, setActiveTab] = useState('Tech');
  const [events, setEvents] = useState({ Tech: [], Creative: [], Others: [] });

  useEffect(() => {
    const mockData = {
      Tech: [
        {
          id: 1,
          icon: 'https://cdn-icons-png.flaticon.com/512/1048/1048953.png',
          serviceName: 'Hackfest Delhi 2025',
          serviceDescription: 'One of the biggest hackathons in Delhi. Exciting prizes await!',
        },
        {
          id: 2,
          icon: 'https://cdn-icons-png.flaticon.com/512/2698/2698194.png',
          serviceName: 'InnovateX Hackathon',
          serviceDescription: 'A 36-hour coding marathon in Delhi NCR.',
        },
        {
          id: 3,
          icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
          serviceName: 'CodeSprint Delhi',
          serviceDescription: 'Collaborate and code your way to innovation in the heart of Delhi!',
        },
      ],
      Creative: [
        {
          id: 4,
          icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828911.png',
          serviceName: 'Design-o-thon 2025',
          serviceDescription: 'UI/UX design competition with industry mentors.',
        },
        {
          id: 5,
          icon: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png',
          serviceName: 'CreatiVerse',
          serviceDescription: 'A design sprint for illustrators, UX/UI & branding artists.',
        },
      ],
      Others: [
        {
          id: 6,
          icon: 'https://cdn-icons-png.flaticon.com/512/3812/3812168.png',
          serviceName: 'PM League',
          serviceDescription: 'Product management competition to solve real-world cases.',
        },
        {
          id: 7,
          icon: 'https://cdn-icons-png.flaticon.com/512/3039/3039430.png',
          serviceName: 'IdeaPitch Delhi',
          serviceDescription: 'Pitch your product/startup idea in front of top VCs!',
        },
      ]
    };

    setEvents(mockData);
  }, []);

  return (
    <div className="services-container">
      <h2>Happening Near You!</h2>

      <div style={{ color: '#9e1f1f' }}>
  {['Tech', 'Creative', 'Others'].map(tab => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      style={{
        padding: '8px 16px',
        marginRight: '10px',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontWeight: '500',
        backgroundColor: activeTab === tab ? '#9e1f1f' : '#ffffff',
        color: activeTab === tab ? '#ffffff' : '#9e1f1f',
        transition: 'all 0.3s ease',
      }}
    >
      {tab}
    </button>
  ))}
</div>

      <div className="services-grid">
        {events[activeTab].map(event => (
          <ServiceCard
            key={event.id}
            icon={event.icon}
            serviceName={event.serviceName}
            serviceDescription={event.serviceDescription}
            bookButton={'Register'}
          />
        ))}
      </div>
    </div>
  );
};

export default Happening;
