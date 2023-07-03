import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import "./about.css";
import Footer from "../Footer/Footer";
import ButtonVolver from "../../elements/ButtonVolver";

export default function About() {
  return (
    <Box textAlign="center" mt={4}>
      <Box display="flex" justifyContent="flex-start" mb={4}>
        <ButtonVolver />
      </Box>
      <Box mt={6}> {/* Ajusta el valor de mt aquí */}
        <Heading as="h1" size="xl" mb={4}>
          Sobre Nosotros
        </Heading>
        <Text className="resumen" width="70%" margin="0 auto">
          "En El Rincón del Sabiondo, somos un grupo de apasionados estudiantes de HENRY que comparten un amor por la lectura y la programación. Nos hemos unido para crear una experiencia de compra en línea única para los amantes de los libros de todo el mundo. Desde los clásicos atemporales hasta los éxitos de ventas más recientes, nuestra selección de títulos es curada cuidadosamente para ofrecer algo para todos los gustos. Nos esforzamos por brindar un excelente servicio al cliente y una experiencia de compra sin problemas. ¡Gracias por elegirnos para satisfacer sus necesidades de lectura!"
        </Text>
        {/* <Box display="flex" justifyContent="center" mt={4}>
          <img
            src="https://d2qc4bb64nav1a.cloudfront.net/cdn/13/images/libreriagrande01.jpg"
            className="img-about"
            alt=""
          />
        </Box> */}
        
      </Box>
      <Footer />
    </Box>
  );
}