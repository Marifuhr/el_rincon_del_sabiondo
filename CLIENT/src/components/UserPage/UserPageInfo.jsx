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
  List
} from "@chakra-ui/react";
// import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
//import { useAuth0 } from "@auth0/auth0-react";
import { useUserInfo } from "../../context/ProviderUser";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

export default function Simple() {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUserInfo();
  //const {name, picture, email, role, } = user;

  useEffect(() => {
    if (user) {
      setIsLoading(false);
    }
  }, [user]);

  return (
    isLoading ?
      <Loader mode="basic" />
      :
      <Container maxW={"3xl"}>
        <SimpleGrid
          columns={{ base: 2, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              src={user.picture}
              alt={user.name}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ sm: "400px", lg: "400px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {user.name}
              </Heading>
              <Text
                color="gray.900"
                fontWeight={300}
                fontSize={"2xl"}
                bg="white"
                textAlign="center"
                borderRadius={5}
              >
                {user.role}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor="gray.200"
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color="gray.500"
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                  {`Id: ${user.IdUser}`}
                </Text>
                <Text fontSize={"lg"}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text>
              </VStack>
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
                        Email:
                      </Text>
                      <Text whiteSpace="nowrap">{user.email}</Text>
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
            </Stack>

            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg="gray.900"
              color="white"
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
  );
}
