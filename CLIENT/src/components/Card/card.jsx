import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";

import { Link, Navigate, useNavigate } from "react-router-dom";
import formatDate from "../../utils/formatDate";
import ButtonAddBookCart from "../ShoppingCart/ButtonAddBookCart";
import fontStyle from "../../assets/fonts/Atma/Atma-SemiBold.ttf";
import { transform } from "framer-motion";
import { useDispatch } from "react-redux";
import { addBookCart } from "../../Redux/Action/Index";

function Cards({ props }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddCartBook = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (props) {
      dispatch(addBookCart(props));
      navigate("/cart_pay");
    }
  };



  const primaryColor = useColorModeValue("brand.primary", "brand.secondary");
  const isBookOutOfStock = props.stock === 0;

  return (
    <Center py={10}>
      <Box
        role={"group"}
        p={6}
        maxW={"250px"}
        w={"full"}
        bg={"white"}
        boxShadow={
          "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        }
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Link to={`/detail/${props.IdBook}`}>
          <Box rounded={"xlg"} mt={-12} pos={"relative"} height={"200px"}>
            <Image
              rounded="lg"
              width="110%"
              height="110%"
              objectFit="contain"
              src={props.image}
              alt="Book Cover"
              _hover={{
                transform: "scale(1.05)",
                transition:
                  "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              }}
            />
          </Box>
        </Link>
        <Stack pt={5} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {props.Authors[0].name}
          </Text>
          <Heading
            fontSize={"md"}
            fontFamily={fontStyle}
            fontWeight={500}
            overflow="hidden"
            textAlign={"center"}
            whiteSpace="break-spaces"
            textOverflow="clip"
            maxWidth="100%"
          >
            {props.title}
          </Heading>

          {isBookOutOfStock ? ( // Mostrar "AGOTADO" si el libro está fuera de stock
            <Stack
              direction={"row"}
              align={"center"}
              justify={"center"}
              bg={"gray"}
              p={1}
              rounded={"sm"}
              mt={2}
              w={"100%"}
              boxShadow={
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
              }
            >
              <Text fontWeight={600} fontSize={"xl"} mb={0} color={"white"}>
                AGOTADO
              </Text>
            </Stack>
          ) : (
            <Stack
              direction={"row"}
              align={"center"}
              justify={"center"}
              bg={"brand.secondary"}
              p={2}
              rounded={"sm"}
              mt={2}
              w={"100%"}
              boxShadow={
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
              }
            >
              <Text fontWeight={800} fontSize={"xl"} mb={0}>
                ${props.price}
              </Text>
            </Stack>
          )}
        </Stack>
        {/* <ButtonAddBookCart attributesStyles={buttonStyles} book={props} /> */}

        <Stack
          alignItems={"center"}
          direction={"row"}
          justify={"center"}
          mt={"5px"}
        >
          <ButtonAddBookCart book={props} />

          {/* <Link to={`/cart_pay`}> */}
          <Button
            onClick={handleAddCartBook}
            colorScheme="teal"
            variant="solid"
          >
            Comprar
          </Button>

          {/* <Button
            style={{
              backgroundColor: "#DF2E38",
              variant="outline"
              color: "white",
              margin: "5px",
              padding: "8px 20px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Comprar
          </Button> */}
        </Stack>
      </Box>
    </Center>
  );
}

export default Cards;
