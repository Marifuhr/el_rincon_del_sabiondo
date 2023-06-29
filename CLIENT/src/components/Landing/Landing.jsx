// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Landing.module.css";
import CardLanding from "../CardLanding/CardLanding";
import LandingCarrusel from "../LandingCarrusel/carrusel"
// import NavBar from "../NavBar/NavBar"
import CarruselLink from "./../CarruselLink/CarruselLink"
import Reviews from './../reviews/Reviews';

import Footer from "../Footer/Footer";


function Landing() {



  return (
    <div className={styles.landing}>
      

      <div style={{ marginTop: "20px" }}>
        <LandingCarrusel />
      </div>
      {/* <div style={{ marginTop: "20px" }}>
        <CarruselLink />
      </div> */}
      <div style={{ marginTop: "20px" }}>
        <CardLanding />
      </div>
  <div style={{ marginTop: "50px", textAlign: 'center' }}>
        <h1 style={{ fontSize: "25px", textShadow: "2px 2px gray" }}>
          La voz de los lectores
        </h1>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Reviews />
      </div>

      <div style={{marginTop: "20px"}}>
        
        <Footer/>
      
      </div>
    </div>
  );
}

export default Landing;