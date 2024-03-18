import React from "react";

import { Link } from "react-router-dom";
// import Banner from "../images/banner.jpeg";


const Home1 = () => {
  return (
    <>
      {/* <div className="home" style={{ backgroundImage: `url(${Banner})` }}> */}
        <div >
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
          <Link to="/Table">
            <button>BOOK NOW</button>
          </Link>
        </div>
     
        </>
  );
};

export default Home1;
