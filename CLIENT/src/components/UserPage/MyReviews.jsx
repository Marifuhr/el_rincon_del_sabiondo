import {
  Avatar,
  Image,
  Box,
  ListItem,
  Text,
  chakra,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useUserInfo } from "../../context/ProviderUser";
import { useState } from "react";
import TestimonialCard from "../Testimonial/TestimonialCard";


export default function GridBlurredBackdrop() {
  const { user } = useUserInfo();
  const [showAllReviews, setShowAllReviews] = useState(false);
  const firstThreeReviews = user?.Reviews?.slice(0, 3) || [];

  const handleMostrarTodosClick = () => {
    setShowAllReviews(true);
  };

  return (
    <Flex
      textAlign={"center"}
      pt={10}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
      overflow={"hidden"}
      maxW={"1200px"}
      margin={"auto"}
    >
      <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
        <chakra.h3
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          fontSize={{ base: 16, md: 20 }}
          textTransform={"uppercase"}
          color={"purple.400"}
        >
          Perfil de Usuario
        </chakra.h3>
        <chakra.h1
          py={5}
          fontSize={{ base: 32, md: 48 }}
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          color={useColorModeValue("gray.700", "gray.50")}
        >

          Mis comentarios:

        </chakra.h1>
      </Box>
      <SimpleGrid
        // columns={{ base: 1, xl: 2 }}
        spacing={{ base: 4, md: 10 }}
        width={"full"}
        mt={16}
        mb={16}
        mx={"auto"}
        marginLeft={{ base: "0", xl: "20" }}
      >
        {showAllReviews
          ? user?.Reviews?.map((review, index) => (
              <TestimonialCard key={index} review={review} />
            ))
          : firstThreeReviews.map((review, index) => (
              <TestimonialCard key={index} review={review} />
            ))}
        {!showAllReviews && user?.Reviews?.length > 3 && (
          <Box width="full" textAlign="center">
            <Button colorScheme="teal" onClick={handleMostrarTodosClick}>
              Ver todas
            </Button>
          </Box>
        )}
      </SimpleGrid>
    </Flex>
  );
}
