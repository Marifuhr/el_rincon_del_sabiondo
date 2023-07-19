import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";
import Footer from "./Footer";
import ButtonVolver from "../../elements/ButtonVolver";

function Construccion() {
  return (
    <Box
      textAlign="center"
      py={10}
      px={6}
      position="relative"
      minHeight="100vh"
    >
      <WarningTwoIcon boxSize={"50px"} color={"orange.300"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Esta página se encuentra en construcción
      </Heading>
      <Text color={"gray.500"}>
        Estamos trabajando en esta página para brindarte una mejor experiencia.
        Por favor, disculpa las molestias ocasionadas.
      </Text>
      <ButtonVolver variant="boton1" backgroundColor="#70a57b" />

      <Box position="absolute" bottom={0} left={0} width="100%">
        <Footer />
      </Box>
    </Box>
  );
}

export default Construccion;
