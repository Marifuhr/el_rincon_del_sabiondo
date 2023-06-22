// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Landing.module.css";
import CardLanding from "../CardLanding/CardLanding";
import LandingCarrusel from "../LandingCarrusel/carrusel"

function Landing() {
  return (
    <div className={styles.landing}>
      <h1>Welcome to my app!</h1>
      <p>This is the landing page.</p>
      <LandingCarrusel/>
      <CardLanding />
    </div>
  );
}

export default Landing;
