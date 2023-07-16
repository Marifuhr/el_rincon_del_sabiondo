import React, { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Text,
  Image,
  Flex,
  Heading,
  SimpleGrid,
  ListItem,
  List,
  useColorModeValue,
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
      user.SellingTotals?.reduce((total, book) => total + book.product?.price, 0) || 0
    );
  }, [user.SellingTotals]);

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
          color="yellow.500"
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
          </List>
        </SimpleGrid>
      </Box>

      <Box>
        <Text
          fontSize={{ base: "16px", lg: "18px" }}
          color="yellow.500"
          fontWeight={"500"}
          textTransform={"uppercase"}
          mb={"4"}
        >
          Reviews
        </Text>

        <List spacing={2}>
          {reviews.slice(0, 3).map((review, i) => (
            <ListItem key={i}>
              <Image
                rounded={"md"}
                src={review.Book?.image}
                alt={review.Book?.title}
                fit={"cover"}
                align={"center"}
                w={"10%"}
                h={{ sm: "100px", lg: "70px" }}
              />
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
                    color={
                      value <= review.rate ? "yellow.500" : "gray.300"
                    }
                  />
                ))}
              </ListItem>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  Descripción:
                </Text>{" "}
                {review.description}
              </ListItem>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box>
        <Text
          fontSize={{ base: "16px", lg: "18px" }}
          color="yellow.500"
          fontWeight={"500"}
          textTransform={"uppercase"}
          mb={"4"}
        >
          Compras realizadas
        </Text>

        <List spacing={2}>
          <ListItem>
            {shopping?.slice(0, 1).map((book, i) => (
              <Box key={i}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Título del Libro:
                  </Text>{" "}
                  {book.product?.title}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Precio del Libro:
                  </Text>{" "}
                  {book.product?.price}
                </ListItem>
              </Box>
            ))}
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
