import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  chakra,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import Footer from "../Footer/Footer";

import partTimeImage from "../../assets/image/PARTTIME.jpg";
import lecturaInspiracionImage from "../../assets/image/lectura_inspiracion.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* ====================Mision======================================= */}
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        spacing={0}
      >
        <Flex bg="brand.400">
          <Image
            src={partTimeImage}
            alt="3 women looking at a laptop"
            fit="cover"
            w="full"
            ml={"10px"}
            h={{
              base: 64,
              md: "full",
            }}
            bg="gray.100"
            loading="lazy"
            opacity={0.4}
          />
        </Flex>
        <Flex
          direction="column"
          alignItems="start"
          justifyContent="center"
          px={{
            base: 4,
            md: 8,
            lg: 20,
          }}
          py={8}
          zIndex={3}
        >
          <chakra.h1
            mb={4}
            fontSize={{
              base: "4xl",
              md: "4xl",
              lg: "5xl",
            }}
            fontWeight="bold"
            color="#70a57b"
            _dark={{
              color: "gray.300",
            }}
            lineHeight="shorter"
            textShadow="2px 2px 3px rgba(0, 0, 0, 0.5)"
          >
            Nuestra misión
          </chakra.h1>
          <chakra.p
            pr={{
              base: 0,
              lg: 16,
            }}
            mb={4}
            fontSize="lg"
            color="brand.600"
            _dark={{
              color: "gray.400",
            }}
            letterSpacing="wider"
            textAlign={"justify"}
          >
            En El Rincón del Sabiondo, somos un grupo de apasionados estudiantes
            de HENRY que comparten un amor por la lectura y la programación. Nos
            hemos unido para crear una experiencia de compra en línea única para
            los amantes de los libros de todo el mundo. 
           
          </chakra.p>
          <Link to="/contacto">
            <Button variant="boton1">Conócenos</Button>
          </Link>
        </Flex>
      </SimpleGrid>
      {/* =======================Vision================================================= */}
      <Flex
        bg={"#70a57b"}
        direction={{
          base: "column",
          md: "row",
        }}
        _light={{
          bg: "brand.500",
        }}
        px={8}
        py={12}
        mx="auto"
      >
        <Box
          w={{
            base: "full",
            md: 11 / 12,
            xl: 9 / 12,
          }}
          mx="auto"
          pr={{
            md: 20,
          }}
        >
          <chakra.h2
            fontSize={{
              base: "3xl",
              sm: "4xl",
            }}
            fontWeight="extrabold"
            lineHeight="shorter"
            color="white"
            _dark={{
              color: "gray.100",
            }}
            mb={6}
          >
            <chakra.span
              mb={4}
              fontSize={{
                base: "4xl",
                md: "4xl",
                lg: "5xl",
              }}
              fontWeight="bold"
              color="white"
              _dark={{
                color: "gray.300",
              }}
              lineHeight="shorter"
              textShadow="2px 2px 3px rgba(0, 0, 0, 0.5)"
            >
              Y además . . .
            </chakra.span>
            <chakra.span
              display="block"
              mb={4}
              fontSize={{
                base: "4xl",
                md: "4xl",
                lg: "5xl",
              }}
              fontWeight="bold"
              color="white"
              _dark={{
                color: "gray.300",
              }}
              lineHeight="shorter"
              textShadow="2px 2px 3px rgba(0, 0, 0, 0.5)"
            >
              Nuestra Visión
            </chakra.span>
          </chakra.h2>
          <chakra.p
            mb={6}
            fontSize={{
              base: "lg",
              md: "xl",
            }}
            color="gray.100"
            _dark={{
              color: "gray.300",
            }}
            textAlign={"justify"}
          >
            Nuestra visión es ser la principal tienda en línea de libros a nivel
            mundial, ofreciendo la mejor selección de títulos, precios
            competitivos y un servicio excepcional. Nos esforzamos por ser una
            app líder en innovación y tecnología, brindando una experiencia de
            compra en línea fácil y cómoda para nuestros clientes. 
          </chakra.p>
          <Link to="/home">
            <Button border={"1px"} variant="boton1">
              Ir a Compras
            </Button>
          </Link>
        </Box>
      </Flex>
      ;
      {/* ========================Valores===================================== */}
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        spacing={0}
      >
        <Flex bg="brand.400">
          <Image
            src={lecturaInspiracionImage}
            alt="hojas de un libro abierto"
            fit="cover"
            w="full"
            p={15}
            h={{
              base: 50,
              md: "full",
            }}
            loading="lazy"
            opacity={0.4}
          />
        </Flex>

        <Flex
          direction="column"
          alignItems="start"
          justifyContent="center"
          px={{
            base: 4,
            md: 8,
            lg: 20,
          }}
          py={5}
          zIndex={3}
        >
          <chakra.h1
            mb={4}
            fontSize={{
              base: "2Xl",
              md: "2xl",
              lg: "4xl",
            }}
            fontWeight="bold"
            color="#70a57b"
            _dark={{
              color: "gray.300",
            }}
            lineHeight="shorter"
            textShadow="2px 2px 3px rgba(0, 0, 0, 0.5)"
          >
            Queremos mostrarte nuestros Valores
          </chakra.h1>

          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <strong>Pasión por la Lectura</strong>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Valoramos la lectura y creemos en su poder para enriquecer la
                vida de las personas.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <strong>Excelencia en el Servicio al Cliente</strong>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Nos esforzamos por proporcionar un servicio excepcional y una
                experiencia de compra satisfactoria para nuestros clientes.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <strong>Honestidad y Transparencia</strong>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Valoramos la honestidad y la transparencia en nuestras
                operaciones comerciales y nos comprometemos a actuar con
                integridad en todas las situaciones.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <strong>Compromiso con la Calidad</strong>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Nos esforzamos por ofrecer productos de alta calidad a precios
                competitivos.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <strong> Responsabilidad Social y Ambiental</strong>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Nos preocupamos por el impacto que tenemos en la sociedad y el
                medio ambiente, y nos comprometemos a ser una empresa
                responsable y sostenible.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <strong>Innovacion y Tecnología</strong>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Valoramos la innovación y la tecnología y nos esforzamos por
                estar a la vanguardia de la industria del comercio electrónico
                de libros.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <strong> Respeto y Diversidad</strong>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Valoramos la diversidad y el respeto por las diferencias
                culturales y personales. Nos esforzamos por ser inclusivos y
                abiertos a todas las personas.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </SimpleGrid>
      <Footer />
    </>
  );
};

export default About;
