import {
    Box,
    Button,
    Heading,
    Text,
    Center,
    CloseButton,
  } from "@chakra-ui/react";
  import { CheckCircleIcon } from "@chakra-ui/icons";
  import { useState } from "react";
  
  export default function Success() {
    const [isOpen, setIsOpen] = useState(true);
  
    const handleClose = () => {
      setIsOpen(false);
    };
  
    return (
      <div>
        {isOpen && (
          <Center>
            <Box
              p={6}
              maxW={"300px"}
              maxH={"500px"} 
              boxShadow={"2xl"}
              rounded={"sm"}
              pos={"center"}
              zIndex={15}
            >
              <Box textAlign="center" py={10} px={6}>
                <CloseButton onClick={handleClose} />
                <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
                <Heading as="h2" size="xl" mt={6} mb={2}>
                  Compra exitosa
                </Heading>
                <Text color={"gray.500"}>Gracias por su compra.</Text>
              </Box>
            </Box>
          </Center>
        )}
      </div>
    );
  }