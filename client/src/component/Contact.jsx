import React from 'react';

const Contact = () => {
  return (
    <>
      <h2>Contact</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 'auto',
            backgroundColor: '#f9f9f9',
            borderRadius: '12px',
            padding: '40px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <form>
            <div style={{ marginBottom: '15px' }}>
              <label
                htmlFor="name"
                style={{ display: 'block', marginBottom: '6px', color: '#333', fontWeight: 'bold' }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Enter your name'
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label
                htmlFor="email"
                style={{ display: 'block', marginBottom: '6px', color: '#333', fontWeight: 'bold' }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Enter your email'
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label
                htmlFor="message"
                style={{ display: 'block', marginBottom: '6px', color: '#333', fontWeight: 'bold' }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                placeholder='Enter your message'
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  resize: 'vertical',
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: '#9e1f1f',
                color: '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
