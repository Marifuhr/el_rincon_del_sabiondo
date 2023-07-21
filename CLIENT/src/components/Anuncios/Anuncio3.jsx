import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import imagen1 from "../../assets/Libros_imagenes/image_libros100_mas_vendidos.png";
import { Link } from "react-router-dom";

export default function Anuncio3() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              fontSize={"40px"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "brand.tertiary",
                zIndex: -1,
              }}
            >
              Todo lo que buscas,
            </Text>
            <br />
            <Text as={"span"} color={"brand.tertiary"}>
              en un solo Rincon!
            </Text>
          </Heading>
          <Text color={"gray.800"} fontFamily={""} fontWeight={500}
          fontSize={"20px"}>
            Aquí podrás encontrar una gran variedad de títulos de diferentes
            categorías, desde bestsellers hasta clásicos.
            <br />
            ¡Explora nuestra
            amplia selección de libros y encuentra tu próxima gran lectura!
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Link to="/home">
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red"}
              bg={"brand.tertiary"}
              _hover={{ bg: "brand.secondary" }}
            >
              Ir a Pagina Principal
            </Button></Link>
            {/* <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
              How It Works
            </Button> */}
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image alt={"Hero Image"} src={imagen1} />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
