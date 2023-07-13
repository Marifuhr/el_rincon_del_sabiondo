import {
  Box,
  Stack,
  Text,
  Image,
  Flex,
  Heading,
  SimpleGrid,
  ListItem,
  List
} from "@chakra-ui/react";

import { useUserInfo } from "../../context/ProviderUser";

import formatDate from "../../utils/formatDate";

export default function Simple() {
  const { user } = useUserInfo();

  return (
    user && (
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
                  Actualizacion:
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
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Mi comentario:
              </Text>{" "}
              {user.Review}
            </ListItem>
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
              <Text as={"span"} fontWeight={"bold"}>Total de Libro:</Text> {user.SellingTotals}
            </ListItem>
          </List>
        </Box>
      </Box>
    )
  );
}
