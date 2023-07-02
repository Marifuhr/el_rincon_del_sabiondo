// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Landing.module.css";
import CardLanding from "../CardLanding/CardLanding";
import LandingCarrusel from "../LandingCarrusel/carrusel"
import Reviews from './../reviews/Reviews';
import Footer from "../Footer/Footer";

import { Heading } from "@chakra-ui/react";

function Landing() {
  return (
    <>
      <div className={styles.landing}>
        <LandingCarrusel />
        <CardLanding />
        <Heading textAlign="center" padding={5} m={0}>La voz de los lectores</Heading>
        <Reviews />
      </div>
      <Footer />
    </>
  );
}

export default Landing;