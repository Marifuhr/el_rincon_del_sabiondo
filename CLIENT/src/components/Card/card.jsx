import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Flex
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import ButtonAddBookCart from "../ShoppingCart/ButtonAddBookCart";
import fontStyle from "../../assets/fonts/Atma/Atma-SemiBold.ttf";
import WalletMercadoPago from "../WalletMercadoPago/WalletMercadoPago";

function Cards({ props }) {
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
        </Stack>
        {/* <ButtonAddBookCart attributesStyles={buttonStyles} book={props} /> */}

        <Stack
          alignItems={"center"}
          direction={"row"}
          justify={"center"}
          mt={"5px"}
        >
          <Flex gap={2} alignItems="center" m={0}>
            <ButtonAddBookCart book={props} />
            <WalletMercadoPago />
          </Flex>


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
