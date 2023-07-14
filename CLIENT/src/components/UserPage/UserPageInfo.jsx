import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  ListItem,
  List,
  useColorModeValue
} from "@chakra-ui/react";
import { useUserInfo } from "../../context/ProviderUser";
import  formatDate  from "../../utils/formatDate";
import { useState, useEffect } from "react";

export default function Simple() {
  const { user } = useUserInfo();
  console.log(user);
  const [reviews, setReviews] = useState([]);
  const [shopping, setShopping] = useState([]);

  useEffect(() => {
    setReviews(user.Reviews);
  }, [user.Reviews]);

  useEffect(() => {
    setShopping(user.SellingTotals);
  }, [user.SellingTotals]);

  return (
    <Box>
      {/* <Container maxW={"4xl"}> */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }}
        spacing={{ base: 2, md: 0 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            src={user.picture}
            alt={user.name}
            fit={"cover"}
            align={"center"}
            w={"70%"}
            h={{ sm: "300px", lg: "300px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 1 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={5.9}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {user.name}
            </Heading>
          </Box>
        </Stack>
      </SimpleGrid>

      <Box>
        <Text
          fontSize={{ base: "16px", lg: "18px" }}
          color={useColorModeValue("yellow.500", "yellow.300")}
          fontWeight={"500"}
          textTransform={"uppercase"}
          mb={"4"}
        >
          Datos
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <List spacing={2}>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Rol:
              </Text>{" "}
              {user.role}
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Id:
              </Text>{" "}
              {user.IdUser}
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Email:
              </Text>{" "}
              {user.email}
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Actualizacion:
              </Text>{" "}
              {formatDate(user.updatedAt)}
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                País:
              </Text>{" "}
              {user.country}
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Provincia:
              </Text>{" "}
              {user.province}
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Dirección:
              </Text>{" "}
              {user.address}
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Codigo Postal:
              </Text>{" "}
              {user.postalCode}
            </ListItem>
          </List>
        </SimpleGrid>
      </Box>
      <Box>
        <Text
          fontSize={{ base: "16px", lg: "18px" }}
          color={useColorModeValue("yellow.500", "yellow.300")}
          fontWeight={"500"}
          textTransform={"uppercase"}
          mb={"4"}
        >
          Reviews
        </Text>

        <List spacing={2}>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}></Text>{" "}
            {reviews?.map((review) => (
              <Box>
                <ListItem>
                  <Image
                    rounded={"md"}
                    src={review.Book.image}
                    alt={user.name}
                    fit={"cover"}
                    align={"center"}
                    w={"20%"}
                    h={{ sm: "100px", lg: "50px" }}
                  />
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Nombre del Libro:
                  </Text>{" "}
                  {review.Book.title}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Id del Libro:
                  </Text>{" "}
                  {review.IdBook}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Puntuación:
                  </Text>{" "}
                  {review.rate}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Descripción:
                  </Text>{" "}
                  {review.description}
                </ListItem>
                <br />
              </Box>
            ))}
          </ListItem>
        </List>
      </Box>
      <Box>
        <Text
          fontSize={{ base: "16px", lg: "18px" }}
          color={useColorModeValue("yellow.500", "yellow.300")}
          fontWeight={"500"}
          textTransform={"uppercase"}
          mb={"4"}
        >
          Compras realizadas
        </Text>

        <List spacing={2}>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Total de Libro:
            </Text>{" "}
            {shopping?.map((book) => (
              <Box>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Producto:
                  </Text>{" "}
                  {book.product}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Precio:
                  </Text>{" "}
                  {book.price}
                </ListItem>
              </Box>
            ))}
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}