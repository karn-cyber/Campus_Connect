import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: 'black',
        boxShadow: '0px -2px 4px rgba(7, 7, 7, 0.1)',
        width: '100%',
        padding: '20px',
        color: 'white',
      }}
    >
      <h2 style={{ color: '#9e1f1f', marginBottom: '50px',display:'flex',justifyContent:'flex-start' }}>Campus Connect</h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginBottom: '15px'
      }}>
        <button style={{ color: 'white', backgroundColor: 'transparent', border: '1px solid white', padding: '8px 12px' }}>Contact Us</button>
        <button style={{ color: 'white', backgroundColor: 'transparent', border: '1px solid white', padding: '8px 12px' }}>Terms and Conditions</button>
        <button style={{ color: 'white', backgroundColor: 'transparent', border: '1px solid white', padding: '8px 12px' }}>Privacy Policy</button>
        <button style={{ color: 'white', backgroundColor: 'transparent', border: '1px solid white', padding: '8px 12px' }}>Help</button>
        <button style={{ color: 'white', backgroundColor: 'transparent', border: '1px solid white', padding: '8px 12px' }}>About Us</button>
      </div>

      <p style={{ marginTop: '10px' }}>© 2023 Campus Connect. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
