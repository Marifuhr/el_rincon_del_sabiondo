import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Stack,
  Image,
  chakra,
} from "@chakra-ui/react";
import React from "react";
import imagelanding from "../../assets/image/imagen_landing1.jpg";
import Logo2 from "../../assets/image/logo2.png";
import "animate.css";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import "./Anuncio2.css"

export default function Anuncio2() {
  const bg = {
    bg: "gray.100",
  };
  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    window.scrollTo({
      top: currentPosition + 750,
      behavior: "smooth",
    });
  };

  return (
    <chakra.header>
      <Box
        w={["100%", "100%", "100%"]}
        h= {["50vh", "75vh", "100vh"]}
        backgroundImage={imagelanding}
        bgPos="center"
        bgSize="cover"
      >
        <Flex
          justify="center"
          pos="relative"
          boxSize="full"
          bg="blackAlpha.700"
        >
          <Box
            w={["20%", "20%", "25%"]}
            h={["20%", "20%", "25%"]}
            border="1px solid black"
            borderRadius="10px"
            backgroundColor="#70a57b"
            boxShadow={
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
            }
            m={["8px", "8px", "20px"]}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link to="/home">
              <Image src={Logo2} alt="Logo" />
            </Link>
          </Box>

          <Flex
            direction="column"
            justify="center"
            alignItems="center"
            w={["100%", "100%", "50%"]}
          >
            <Stack spacing={20} textAlign="center">
              <Heading
                fontSize={["2xl", "3xl", "6xl"]}
                fontWeight="semibold"
                color="brand.primary"
                textTransform="uppercase"
                className="animate__animated animate__zoomInDown animate__delay-1s"
              >
                Bienvenidos
              </Heading>
              <Link to="/home">
                <Button
                  variant="boton1"
                  colorScheme="brand"
                  textTransform="uppercase"
                  w="fit-content"
                >
                  Iniciar
                </Button>
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Box>
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
    </chakra.header>
  );
}
