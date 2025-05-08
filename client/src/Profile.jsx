import React from 'react'
import Navigation from './component/Navigation'
import profilePic from './assets/NeelanshuKarn.jpeg' 

const Profile = () => {
  return (
    <div>
      <>
        <Navigation />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: '300px',
            width: 'auto',
            color: 'black',
            backgroundColor: 'white',
            marginTop: '100px',
            padding: '10px',
            marginLeft: '10px',
            marginRight: '10px',
            borderRadius: '12px'
          }}
        >
          <div
            style={{
              height: '250px',
              width: '250px',
              margin: '15px',
              borderRadius: '50%',
              overflow: 'hidden',
              marginLeft: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border:'2px solid black'

            }}
          >
            <img
              src={profilePic}
              alt='Neelanshu Karn'
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          <div
            style={{
              marginLeft: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <h2 style={{ margin: 10 }}>Neelanshu Karn</h2>
            <p style={{ margin: 10, marginTop: 0, color: '#555' }}>
              Rishihood University
            </p>
          </div>
        </div>
      </>
    </div>
  )
}

export default Profile
