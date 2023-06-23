// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Landing.module.css";
import CardLanding from "../CardLanding/CardLanding";
import LandingCarrusel from "../LandingCarrusel/carrusel"
import NavbarLanding from './../NavBarLanding/NavbarLanding';
import CarruselLink from "./../CarruselLink/CarruselLink"

function Landing() {
  return (
    <div className={styles.landing}>
      <NavbarLanding />

      <div style={{ marginTop: "20px" }}>
        <LandingCarrusel />
      </div>
      <div style={{ marginTop: "20px" }}>
        <CarruselLink />
      </div>
      <div style={{ marginTop: "20px" }}>
      <CardLanding />
      </div>
    </div>
  );
}

export default Landing;
