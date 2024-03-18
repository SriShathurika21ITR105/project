import React, { useState, useEffect } from 'react';
import './PatientProfile.scss';

const PatientProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details from the server using the JWT token
    const token = localStorage.getItem('token');
    if (token) {
      fetch('/getUserDetails', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, []);

  return (
    <div className="patient-profile-container">
      {user && (
        <div className="user-image">
          <img src="https://tse3.mm.bing.net/th?id=OIP._YgVOXjtiO95gnUJyaCrVAHaHa&pid=Api&P=0&h=220" alt="Profile" />
        </div>
      )}
      <h2>Your Profile</h2>
      {user && (
        <div className="user-details">
          <p>Name: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Add more user details here */}
        </div>
      )}
    </div>
  );
};

export default PatientProfile;
