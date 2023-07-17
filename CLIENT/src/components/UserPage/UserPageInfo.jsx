import React, { useState, useEffect } from "react";
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
  useColorModeValue,
  Input,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useUserInfo } from "../../context/ProviderUser";
import formatDate from "../../utils/formatDate";

export default function Simple() {
  const { user } = useUserInfo();
  const [reviews, setReviews] = useState([]);
  const [shopping, setShopping] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setReviews(user.Reviews || []);
  }, [user.Reviews]);

  useEffect(() => {
    setShopping(user.SellingTotals || []);
    setTotalPrice(
      user.SellingTotals?.reduce((total, book) => total + book.price, 0) || 0
    );
  }, [user.SellingTotals]);

  const handleChange = (field, value) => {
    // Aquí puedes manejar la lógica para actualizar el campo correspondiente en el estado
  };

  return (
    <Box>
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
                Actualización:
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
                Código Postal:
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
          {reviews?.slice(0, 3).map((review) => (
            <ListItem key={review.IdBook}>
              <Box>
                <Image
                  rounded={"md"}
                  src={review.Book?.image}
                  alt={review.Book?.title}
                  fit={"cover"}
                  align={"center"}
                  w={"10%"}
                  h={{ sm: "100px", lg: "70px" }}
                />
              </Box>
              <Box>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Nombre del Libro:
                  </Text>{" "}
                  {review.Book?.title}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Id del Libro:
                  </Text>{" "}
                  {review.IdBook}
                </ListItem>
                <ListItem>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <StarIcon
                      key={value}
                      boxSize={3}
                      color={value <= review.rate ? "yellow.500" : "gray.300"}
                    />
                  ))}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Descripción:
                  </Text>{" "}
                  {review.description}
                </ListItem>
                <br />
              </Box>
            </ListItem>
          ))}
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
              Total de Libro: {totalPrice}
            </Text>{" "}
            {shopping?.slice(0, 3).map((book) => (
              <Box key={book.IdSellingTotal}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Producto:
                  </Text>{" "}
                  {book.BookTitle}
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



