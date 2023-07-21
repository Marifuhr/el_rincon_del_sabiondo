import React from "react";
import styles from "./Landing.module.css";
import CardLanding from "../CardLanding/CardLanding";
import LandingCarrusel from "../LandingCarrusel/carrusel";
// import Reviews from './../reviews/Reviews';
import Footer from "../Footer/Footer";
import { Link, useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

import { Heading } from "@chakra-ui/react";
import Anuncio1 from "../Anuncios/Anuncio1";
import Anuncio2 from "../Anuncios/Anuncio2";
import Anuncio3 from "../Anuncios/Anuncio3";
import Carousel from "../Carousel/Carousel";

function Landing() {
  const location = useLocation();
  const hideNavBar = location.pathname === "/";
   //console.log(location.pathname);

  return (
    <>
      {!hideNavBar && <NavBar />}
      <div className={styles.landing}>
        <Anuncio2  />
        <Anuncio3 />
        <Anuncio1 />
        <Link to="/home">
          <Carousel />
        </Link>

        {/* <CardLanding /> */}
        {/* <Heading textAlign="center" padding={5} m={0}>La voz de los lectores</Heading> */}
        {/* <Reviews /> */}
      </div>
      <Footer />
    </>
  );
}

export default Landing;

// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import styles from "./Landing.module.css";
// import CardLanding from "../CardLanding/CardLanding";
// import LandingCarrusel from "../LandingCarrusel/carrusel"
// // import Reviews from './../reviews/Reviews';
// import Footer from "../Footer/Footer";

// import { Heading } from "@chakra-ui/react";
// import Anuncio1 from "../Anuncios/Anuncio1";
// import Anuncio2 from "../Anuncios/Anuncio2";
// import Anuncio3 from "../Anuncios/Anuncio3";

// function Landing() {
//   return (
//     <>
//       <div className={styles.landing}>
//         <Anuncio2/>
//         <Anuncio3/>
//         <Anuncio1/>

//         {/* <CardLanding /> */}
//         {/* <Heading textAlign="center" padding={5} m={0}>La voz de los lectores</Heading> */}
//         {/* <Reviews /> */}
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Landing;
