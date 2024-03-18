import React from "react";
import './About.scss';
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Our Shopping Page</Typography>
        
         
         <p>A comprehensive catalog showcasing a wide range of home renovation products, categorized for easy browsing and A robust search engine allowing users to find products by keywords, categories, brands, and price ranges.High-resolution images and multiple angles of each product to give customers a clear view and Detailed product descriptions, including specifications, dimensions, materials, and usage guidelines.Customer reviews and ratings to build trust and assist buyers in their decision-making,An intuitive shopping cart system that enables users to add, remove, and review items before checkout, A secure and user-friendly.
         Remodel is a leading expert when it comes to building or remodeling either residential houses or commercial buildings. We always put a distinct focus on Edina and other captivating neighborhoods in the Twin Cities. Our company’s expertise includes skillfully blending new homes amongst established ones. The Remodel team knows the importance of keeping the process simple and worry-free, and they work closely with clients to custom tailor each home. Remodel provides the highest quality experience and materials, but knows that true luxury is found in everyday real living–sharing life with the people that matter most.
          Moreover, Your security and satisfaction are paramount to us. Our secure checkout process safeguards your personal and payment information, and our user-friendly platform makes it easy to find, compare, and purchase the perfect products for your project. We're not just here to sell you products; we're here to empower you with the knowledge and resources you need to make informed decisions.In fostering a vibrant community of renovators, we offer a platform for sharing experiences,gathering insights, and seeking advice. We value your feedback and actively seek it to continually enhance our website and offerings.</p>
         {/* Add more about page content */}
       
   
    
       
        <br />
       
      </Box>
   </>
  );
};

export default About;
// import React from 'react';
// import './About.scss'; // Create this CSS file for styling

// function About() {
//   return (
//     <div className="about-page">
//       <div className="left-column">
//         <img src="https://img.freepik.com/free-photo/business-people-partnership-support-team-urban-scene-concept_53876-144834.jpg?size=626&ext=jpg&ga=GA1.1.1113105765.1694537574&semt=ais" alt="Home Renovation" />
//       </div>
//       <div className="right-column">
//         <h2>WELCOME TO OUR SHOPPING PAGE</h2>
//         <p>A comprehensive catalog showcasing a wide range of home renovation products, categorized for easy browsing and A robust search engine allowing users to find products by keywords, categories, brands, and price ranges.High-resolution images and multiple angles of each product to give customers a clear view and Detailed product descriptions, including specifications, dimensions, materials, and usage guidelines.Customer reviews and ratings to build trust and assist buyers in their decision-making,An intuitive shopping cart system that enables users to add, remove, and review items before checkout, A secure and user-friendly.
//         Remodel is a leading expert when it comes to building or remodeling either residential houses or commercial buildings. We always put a distinct focus on Edina and other captivating neighborhoods in the Twin Cities. Our company’s expertise includes skillfully blending new homes amongst established ones. The Remodel team knows the importance of keeping the process simple and worry-free, and they work closely with clients to custom tailor each home. Remodel provides the highest quality experience and materials, but knows that true luxury is found in everyday real living–sharing life with the people that matter most.
//          Moreover, Your security and satisfaction are paramount to us. Our secure checkout process safeguards your personal and payment information, and our user-friendly platform makes it easy to find, compare, and purchase the perfect products for your project. We're not just here to sell you products; we're here to empower you with the knowledge and resources you need to make informed decisions.In fostering a vibrant community of renovators, we offer a platform for sharing experiences,gathering insights, and seeking advice. We value your feedback and actively seek it to continually enhance our website and offerings.</p>
//         {/* Add more about page content */}
//       </div>
//     </div>
//   );
// }

// export default About;
