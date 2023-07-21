import {
  Box,
  Text,
  Image,
  Flex,
  Stack,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import ButtonDeleteBookCart from "../ShoppingCart/ButtonDeleteBookCart";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../../Redux/Action/Index";

const CardBookCart = ({
  image,
  title,
  description,
  IdBook,
  price,
  quantity,
}) => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };
  return (
    <Stack
      position="relative"
      maxH={{ base: "100%", sm: "300px" }}
      bg="brand.primary"
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
      borderRadius={4}
      overflow="hidden"
      my={2}
      p={2}
    >
      <Flex flexWrap={{ base: "wrap", md: "nowrap" }}>
        <Box
          maxHeight={{ md: "sm", base: "200px" }}
          minH="100%"
          minWidth={{ md: "200px", base: "100px" }}
          w="100%"
          overflow="hidden"
          maxW={{ base: "100%", md: "150px" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Link to={`/detail/${IdBook}`}>
            <Image
              objectFit="cover"
              objectPosition="top"
              pr={{ md: 4, base: 1 }}
              minH="10rem"
              minW="8rem"
              src={image}
              alt={title}
            />
          </Link>
        </Box>

        {/* TITULO, DESCRIPCION, PRECIO, CANTIDAD, TOTAL */}
        <Box p={2} maxW={{ base: "100%", md: "sm" }}>
          <Link to={`/detail/${IdBook}`} noUnderline={true}>
            <Text
              fontSize={{
                base: "1xl",
                md: "1xl",
                lg: "2xl",
              }}
              color="rgb(39, 39, 39)"
              fontWeight={600}
              lineHeight="shorter"
              textShadow="2px 2px 3px rgba(0, 0, 0, 0.5)"
              textAlign={{ base: "center", md: "left" }}
            >
              {title}
            </Text>
          </Link>
          <Text
            noOfLines={2}
            fontSize="12px"
            textAlign={{ base: "center", md: "justify" }}
            lineHeight="1.2em"
          >
            {description}
          </Text>
          <Flex
            gap={{ md: 10, base: 2 }}
            flexWrap={{ md: "nowrap", base: "wrap" }}
            alignItems={{ md: "center", base: "flex-end" }}
            flexDirection={{ md: "row", base: "column" }}
          >
            <Box
              display="flex"
              justifyContent="flex-end"
              margin={{ base: "auto", md: 0 }}
            >
              <ButtonDeleteBookCart IdBook={IdBook} />
            </Box>
          </Flex>
        </Box>

        <Box
          maxW="200px"
          width="100%"
          bg="#70a57b"
          whiteSpace="nowrap"
          fontWeight="bold"
          borderRadius={3}
          boxShadow="0 1px 5px rgba(0,0,0,0.3)"
          mx={{ base: "auto", md: 0 }}
        >
          <Box
            width="100%"
            maxWidth={{ md: "unset", base: "550px" }}
            px={{ md: 4, base: 2 }}
            py={2}
          >
            <Stack direction="column" spacing={2}>
              {/* Cantidad */}
              <Stack
                shouldWrapChildren
                direction="row"
                alignItems="center"
                isTruncated
              >
                <Flex>
                  <span>Cantidad</span>
                </Flex>
                <Flex>
                  <NumberInput
                    size="xs"
                    maxW={12}
                    defaultValue={quantity}
                    min={1}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper
                        onClick={() => handleIncreaseQuantity(IdBook)}
                      />
                      <NumberDecrementStepper
                        onClick={() => handleDecreaseQuantity(IdBook)}
                      />
                    </NumberInputStepper>
                  </NumberInput>
                </Flex>
              </Stack>
              {/* Precio Unitario */}
              <Box
                bg="#70a57b"
                whiteSpace="nowrap"
                fontWeight="bold"
                borderRadius={3}
                pt={"2px"}
                pr={2}
                boxShadow="0 1px 5px rgba(0,0,0,0.3)"
                fontSize="12px"
              >
                <Stack direction="column" spacing={0}>
                  <span
                    style={{
                      fontSize: "16px",
                      color: "blue",
                      fontWeight: "bold",
                      textAlign: "right",
                    }}
                  >
                    ${price}
                  </span>
                  <span
                    style={{
                      textAlign: "left",
                      color: "black",
                      padding: "5px",
                    }}
                  >
                    Precio Unitario:
                  </span>
                </Stack>
              </Box>
              {/* Total */}
              <Box
                bg="#70a57b"
                whiteSpace="nowrap"
                fontWeight="bold"
                borderRadius={3}
                px={2}
                py={3}
                boxShadow="0 1px 5px rgba(0,0,0,0.3)"
                fontSize="16px"
              >
                <Stack direction="column" spacing={0}>
                  <span
                    style={{
                      alignSelf: "flex-start",
                      textShadow: "0 1px 5px rgba(0,0,0,0.3)",
                    }}
                  >
                    Total:
                  </span>
                  <span
                    style={{
                      fontSize: "22px",
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                      textShadow: "0 1px 5px rgba(0,0,0,0.3)",
                    }}
                  >
                    ${Number(price * quantity).toFixed(2)}
                  </span>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Flex>
    </Stack>
  );
};

export default CardBookCart;

// import { Box, Text, Image, Flex, Stack, Button } from '@chakra-ui/react'
// import React from 'react'
// import ButtonDeleteBookCart from '../ShoppingCart/ButtonDeleteBookCart';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { increaseQuantity, decreaseQuantity } from '../../Redux/Action/Index';

// const CardBookCart = ({ image, title, description, IdBook, price, quantity }) => {
//   const dispatch = useDispatch();

//   const handleIncreaseQuantity = (id) => {
//     dispatch(increaseQuantity(id));
//   };

//   const handleDecreaseQuantity = (id) => {
//     dispatch(decreaseQuantity(id));
//   };

//     return (
//         <Stack position="relative" maxH={{base:'100%', md:'300px'}} bg="rgba(0,0,0,0.1)" borderRadius={6} overflow="hidden" my={2}>
//             <Flex flexWrap={{base:'wrap',md:"nowrap"}} >
//                 <Box maxHeight={{md:"sm", base:"200px"}} minH="100%" minWidth="100px" w="100%" overflow="hidden">
//                     <Image objectFit="cover" objectPosition="top" minH="100%" minW="100%" src={image} alt={title} />
//                 </Box>
//                 <Box p={4}>
//                     <Link to={`/detail/${IdBook}`}>
//                         <Text _hover={{color:"#163e1e", textDecoration:"underline"}} color="rgb(39, 39, 39)" fontWeight={600}>{title}</Text>
//                     </Link>
//                     <Text noOfLines={3}>{description}</Text>
//                     <Flex gap={{md:10, base:2}} flexWrap={{md:"nowrap", base:'wrap'}} alignItems="center">
//                         <Box bg="#70a57b" whiteSpace="nowrap" fontWeight="bold" borderRadius={3} px={4} py={1} boxShadow="0 1px 5px rgba(0,0,0,0.3)">
//                             <span>Precio Unitario</span>
//                             <span style={{color:'#163e1e'}}> ${price}</span>
//                         </Box>
//                         <Box bg="#70a57b" whiteSpace="nowrap" fontWeight="bold" borderRadius={3} px={4} py={1} boxShadow="0 1px 5px rgba(0,0,0,0.3)">
//                             <span>Cantidad Agregados: </span>
//                             <span style={{color:'#163e1e'}}>{quantity}</span>
//                         </Box>
//                     </Flex>
//                         <span>Total: </span>
//                         <span style={{color:'#ededed'}}>{Number(price * quantity).toFixed(2)}</span>
//                     </Box>
//                     <Box maxW="sm" my={2} py={1} width="min-content" bg="#70a57b" whiteSpace="nowrap" fontWeight="bold" borderRadius={3} px={4} boxShadow="0 1px 5px rgba(0,0,0,0.3)">
//                     <Box py={2}>
//                         <ButtonDeleteBookCart IdBook={IdBook} />
//                     </Box>
//                         <Box py={2}>

//           <Button onClick={() => handleIncreaseQuantity(IdBook)}>+</Button>
//           <Button onClick={() => handleDecreaseQuantity(IdBook)}>-</Button>
//         </Box>
//                 </Box>
//             </Flex>

//         </Stack>
//     )
// }

// export default CardBookCart
