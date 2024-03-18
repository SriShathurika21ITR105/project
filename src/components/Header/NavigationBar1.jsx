// import React from 'react';
// import{Link} from 'react-router-dom';
// import './NavigationBar.scss'; 
// import logo1 from "../../assets/images/logo1.png";

// function NavigationBar() {
//   return (
//     <nav className="navbar">
//       <ul className="nav-list">
//       <div className="logo-container">
//         <img src={logo1} alt="logo1" className="logo1" />
//       </div>
//         <li className="nav-item"><Link to="/Home">Home</Link></li>
//         <li className="nav-item"><Link to="">About</Link></li>
//         <li className="nav-item"><a href="#">Products</a></li>
//         <li className="nav-item"><a href="#">Services</a></li>
//         <li className="nav-item"><a href="#">Contact</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default NavigationBar;
import React, { useState,useEffect } from 'react';
import{Link} from 'react-router-dom';
import './NavigationBar.scss';
import logo1 from "../../assets/images/logo1.png";// Replace 'your-logo.png' with the actual file path to your logo image

function NavigationBar1() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
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
    <nav className={`navbar ${showMenu ? 'open' : ''}`}>
      <div className="logo-container">
        <img src="https://tse1.mm.bing.net/th?id=OIP.s-GNuPUEsfd858oaADFuOAHaHa&pid=Api&rs=1&c=1&qlt=95&w=97&h=97" alt="logo1" className="logo1" />
      </div>
      <div className={`menu-icon ${showMenu ? 'open' : ''}`} onClick={toggleMenu}>
        ☰ {/* You can replace this with your menu icon */}
      </div>
      <ul className={`nav-list ${showMenu ? 'open' : ''}`}>
      {user && (
        <div>
          <p>Name: {user.username}</p>
          {/* Add more user details here */}
        </div>
      )}
      
        <li className="nav-item"><Link to="Home1">Home</Link></li>
        <li className="nav-item"><Link to="Testimonials">About</Link></li>
        <li className="nav-item"><Link to="/shop">Products</Link></li>
        <li className="nav-item"><Link to="Contactt">Contact</Link></li>
        <li className="nav-item"><Link to="/LoginPage">LogOUT</Link></li>
        <li className="nav-item"><Link to="PatientProfile">Profile</Link></li>
        {/* <li className="nav-item"><Link to="/SignupPage">Register</Link></li> */}
        
      </ul>
    </nav>
  );
}

export default NavigationBar1;
