// import React from 'react';

// const Footer = () => {
//     return (
//         <footer style={{ background: "#3a3a3a" }} className='d-flex flex-column flex-sm-row justify-content-between page-container p-5'>
//             <div className="footer-left pt-2">
//                 <span className='text-white'>Copyright © 2023 Rennovation Store</span>
//             </div>
//             <div className="footer-right pt-2">
//                 <span className='pe-1 text-white'>Made by</span>
//                 <span className='fw-bold' style={{ color: "#78909c", cursor: "pointer" }} onClick={() => { window.open("https://github.com/Anrsgrl") }}>Anrsgrl</span>
//             </div>
//         </footer>
//     )
// }

// export default Footer;
import React from 'react';
import './Footer.scss'; 

import{Link} from 'react-router-dom';


function Footer() {
  return (
    <footer className="footer">
      <div className="left-column">
        <span>Home Rennovation Shopping Page</span><br></br>
      <span>Copyright © 2023 Rennovation Store</span>
    
      </div>
      
      <div className="right-column">
        <ul>
          <ul><Link to="Home1">Home</Link></ul>
          <ul><Link to="Testimonials">About</Link></ul>
          <ul><Link to="/shop">Products</Link></ul>
          <ul><Link to="Contactt">Contact</Link></ul>
        </ul>
      </div>
      <div className="right1-column">
        <ul>
          <ul><Link to="/LoginPage">LogIN</Link></ul>
          <ul><Link to="/SignupPage">SignUP</Link></ul>
        </ul>
      </div>
      <div className="right2-column">
        <ul>
          <ul><Link to="Testimonials">Terms of Use  |  Privacy Policy</Link></ul>
          
        </ul>
      </div>
      <div className="right3-column">
        <ul>
          <ul>Reach Us</ul>
          <ul>KEC,Erode</ul>
          <ul>502-589-9192</ul>
          <ul>instagram.com/thehomerono/</ul>
        </ul>
      </div>
      
      
    </footer>
  );
}

export default Footer;
