import React from "react";
import styles from "./Landing.module.css";
import CardLanding from "../CardLanding/CardLanding";
import LandingCarrusel from "../LandingCarrusel/carrusel";
// import Reviews from './../reviews/Reviews';
import Footer from "../Footer/Footer";
import { Link, useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

import { Box, Heading, IconButton, useMediaQuery } from "@chakra-ui/react";
import Anuncio1 from "../Anuncios/Anuncio1";
import Anuncio2 from "../Anuncios/Anuncio2";
import Anuncio3 from "../Anuncios/Anuncio3";
import Carousel from "../Carousel/Carousel";
import { FaChevronDown } from "react-icons/fa";

function Landing() {
  const location = useLocation();
  const hideNavBar = location.pathname === "/";
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    window.scrollTo({
      top: currentPosition + 750,
      behavior: "smooth",
    });
  };

  return (
    <>
      {!hideNavBar && <NavBar />}
      <div className={styles.landing}>
        <Anuncio2 />
        <Anuncio3 />
        
        {!isMobile && (
          <>
            <Anuncio1 />
            <Box
              position="absolute"
              bottom="1750px"
              left="50%"
              transform="translateX(-50%)"
              textAlign="center"
              width="100%"
              zIndex={100}
            >
              <IconButton
                aria-label="Ver más abajo"
                icon={<FaChevronDown />}
                size="lg"
                colorScheme="brand"
                variant="outline"
                isRound
                css={{
                  animation: "glow 1.5s ease-in-out infinite alternate",
                }}
                onClick={handleScroll}
              />
            </Box>
            <Box
              position="absolute"
              bottom="980px"
              left="49%"
              transform="translateX(-50%)"
              textAlign="center"
              width="100%"
              zIndex={100}
            >
              <IconButton
                aria-label="Ver más abajo"
                icon={<FaChevronDown />}
                size="lg"
                colorScheme="gray"
                variant="outline"
                isRound
                css={{
                  animation: "glow 1.5s ease-in-out infinite alternate",
                }}
                onClick={handleScroll}
              />
            </Box>
          </>
        )}
        <Link to="/home">
          <Carousel />
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
