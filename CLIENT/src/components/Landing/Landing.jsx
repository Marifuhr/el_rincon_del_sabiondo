// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Landing.module.css";
import CardLanding from "../CardLanding/CardLanding";
import LandingCarrusel from "../LandingCarrusel/carrusel"
import NavbarLanding from './../NavBarLanding/NavbarLanding';
import CarruselLink from "./../CarruselLink/CarruselLink"
import Reviews from './../reviews/Reviews';
import Card from '../../components/Card/card';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Landing() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getbooks = async () => {
      //let card = [];
      const response = await axios.get('http://localhost:3001/books');
      console.log(response);
      setBooks(await axios.get('http://localhost:3001/books'));
      console.log(books)
    }

    getbooks()
  }, []);

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
      <div style={{ marginTop: "50px", textAlign: 'center', backgroundColor: 'rgb(127, 255, 212)' }}>
        <h1 style={{ fontSize: "25px", textShadow: "2px 2px gray" }}>
          La voz de los lectores
        </h1>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Reviews />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Card props={books[0]} />
      </div>
    </div>
  );
}

export default Landing;
