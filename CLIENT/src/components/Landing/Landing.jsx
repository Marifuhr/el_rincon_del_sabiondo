// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Landing.module.css";
import CardLanding from "../CardLanding/CardLanding";
import LandingCarrusel from "../LandingCarrusel/carrusel"
import NavbarLanding from './../NavBarLanding/NavbarLanding';

function Landing() {
  return (
    <div className={styles.landing}>
      <NavbarLanding />
      
      <div style={{ marginTop: "50px" }}>
        <LandingCarrusel />
      </div>
      <CardLanding />
    </div>
  );
}

export default Landing;
