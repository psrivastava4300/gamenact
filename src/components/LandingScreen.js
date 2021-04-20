import React from "react";
import "./LandingScreen.css";
import { Nav, Navbar } from "react-bootstrap";
import Carousel from "./Carousel";
import Navigation from '../Navigation';
import About from './AboutUs';

const LandingScreen = () => {
  return (
    <>
      <div>
        <Navigation />
        <div className="landingText">
          <h1 className="landingPageText1" style={{alignContent: 'center'}}>WE MAKE AWESOME GAMES</h1>
        </div>
        <img className="mainImg" src="Main.png" />
      </div>
      <div>
        <About />
      </div>
    </>
  );
};

export default LandingScreen;
