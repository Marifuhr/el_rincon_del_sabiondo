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
import Logo2 from "../../assets/image/Logo2.1.png";
import "animate.css";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import "./Anuncio2.css";
import "../../assets/fonts/Abril_Fatface/AbrilFatface-Regular.ttf";

export default function Anuncio2() {
  const bg = {
    bg: "gray.100",
  };
 

  return (
    <chakra.header>
      <Box
        w={["100%", "100%", "100%"]}
        h={["50vh", "75vh", "100vh"]}
        backgroundImage={imagelanding}
        bgPos="center"
        bgSize="cover"
      >
        <Flex
          direction={["column", "column", "row"]}
          justify="center"
          pos="relative"
          boxSize="full"
          bg="blackAlpha.700"
        >
          <Box
            w={["80%", "80%", "35%"]}
            h={["80%", "80%", "35%"]}
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
                fontSize={["4xl", "4xl", "6xl"]}
                fontFamily="Abril Fatface"
                fontWeight="semibold"
                color="brand.primary"
                textTransform="uppercase"
                className="animate__animated animate__zoomInDown animate__delay-1s"
                style={{
                  textShadow: "4px 4px 16px rgba(0, 0, 0, 0.3)",
                  textOutline: "3px solid white",
                }}
              >
                Bienvenidos
              </Heading>
              <Link to="/home">
                <Button
                  variant="boton1"
                  colorScheme="brand"
                  textTransform="uppercase"
                  w={{ base: "fit-content", md: "auto" }}
                  m={{ base: "20px", md: "5px" }}
                >
                  Iniciar
                </Button>
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      
    
    </chakra.header>
  );
}
