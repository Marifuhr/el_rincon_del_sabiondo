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
          "En nuestra empresa, creemos que la calidad y la excelencia son la base
          del éxito. Por eso, nos esforzamos por ofrecer productos y servicios de
          alta calidad que satisfagan las necesidades de nuestros clientes. Nos
          enorgullece contar con un equipo de profesionales altamente capacitados
          y comprometidos, que trabajan en conjunto para garantizar que nuestros
          clientes obtengan la mejor experiencia posible. Desde nuestros
          comienzos, nos hemos comprometido a mantenernos a la vanguardia de la
          tecnología y las últimas tendencias del mercado, para poder ofrecer a
          nuestros clientes soluciones innovadoras y eficientes. Nos dedicamos a
          escuchar atentamente las necesidades de nuestros clientes, para poder
          brindar soluciones personalizadas y adaptadas a sus necesidades. Además,
          en nuestra empresa, nos esforzamos por mantener una cultura de trabajo
          inclusiva, donde cada miembro del equipo se sienta valorado y respetado.
          Creemos que la diversidad es una de nuestras mayores fortalezas, y
          fomentamos un ambiente de trabajo colaborativo y creativo. En resumen,
          en nuestra empresa nos dedicamos a ofrecer productos y servicios de alta
          calidad, con un equipo altamente capacitado y comprometido, y una
          cultura de trabajo inclusiva y colaborativa. ¡Gracias por confiar en
          nosotros!"
        </Text>
        <Box display="flex" justifyContent="center" mt={4}>
          <img
            src="https://d2qc4bb64nav1a.cloudfront.net/cdn/13/images/libreriagrande01.jpg"
            className="img-about"
            alt=""
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}