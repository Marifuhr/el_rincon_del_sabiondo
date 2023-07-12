import { Box, Heading, Text, Button } from "@chakra-ui/react";
import theme from "../Resourse/theme/theme";


export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Página No Encontrada
      </Text>
      <Text color={"gray.500"} mb={6}>
        La página que estás buscando no parece existir
      </Text>

      <a href="/home">
  <Button
    colorScheme="teal"
    bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
    color="white"
    variant="solid"
  >
    Ir Página Principal
  </Button>
  </a>
    </Box>
  );
}
