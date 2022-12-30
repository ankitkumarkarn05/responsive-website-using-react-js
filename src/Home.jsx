import React from "react";
import front1 from "./images/front1.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    <>
       <Common 
        name="Grow Your Business with"
        
        imgsrc={front1}

        visit="/Services"
        btname="Get Started"/>
    </>
  );
};

export default Home;
