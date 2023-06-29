import React from "react";
import { Link as ChakraLink, Button } from "@chakra-ui/react";
import Footer from "../Footer/Footer";

export default function contacto() {
  return (
    <div>
      <Button as={ChakraLink} to="/home" className="btn-back">
        Volver
      </Button>
      <Footer />
    </div>
  );
}
