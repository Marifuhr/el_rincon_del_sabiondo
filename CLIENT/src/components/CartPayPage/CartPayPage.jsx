import {
  Box,
  Text,
  Heading,
  Flex,
  Stack,
  Button,
  Image,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import ButtonVolver from "../../elements/ButtonVolver";
import CardBookCart from "./CardBookCart";
import WalletMercadoPago from "../WalletMercadoPago/WalletMercadoPago";
import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import imageBannerOferta from "../../assets/Libros_imagenes/bannerOferta1.1.jpg";

const CartPayPage = () => {
  const [storageCartShopping, count] = useSelector(({ cart_shopping }) => {
    const count = cart_shopping.reduce((init, { price, quantity }) => {
      return init + price * quantity;
    }, 0);

    return [cart_shopping, count.toFixed(2)];
  });

  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Box>
        <ButtonVolver />
        <Heading
          pb={10}
          mb={0}
          pt={0}
          textAlign={"center"}
          fontSize={{
            base: "4xl",
            md: "4xl",
            lg: "5xl",
          }}
          fontWeight="bold"
          color="brand.tertiary"
          _dark={{
            color: "gray.300",
          }}
          lineHeight="shorter"
          textShadow="2px 2px 3px rgba(0, 0, 0, 0.5)"
        >
          Mi Carrito de Compras
        </Heading>
      </Box>

      <Flex
        flex={1}
        flexDirection={{ base: "column", md: "row" }}
        mb={5}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          flex={4}
          ml={10}
          mr={10}
          overflowY="auto"
          bg="brand.primary"
          boxShadow="0 2px 4px rgba(0,0,0,0.1)"
          borderRadius="4px"
          padding="10px"
          maxHeight="calc(107vh - 200px)"
          maxWidth={820}
          css={{
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#a3c5aa",
              borderRadius: "5px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#448f53",
              borderRadius: "5px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#448f53",
            },
          }}
        >
          {storageCartShopping.length ? (
            <Stack spacing={4}>
              {storageCartShopping.map((book) => (
                <CardBookCart key={book.IdBook} {...book} />
              ))}
            </Stack>
          ) : (
            <Box maxW="xl" mx="auto" textAlign="center">
              <Text fontSize="2xl">Aún no tienes Elementos en el Carrito</Text>
              <Link to="/home">
                <Button bg="#315238" color="white">
                  Agrega Uno
                </Button>
              </Link>
            </Box>
          )}
        </Box>
        <Flex
          flex={1}
          flexDirection={{ base: "column", md: "column" }}
          mb={5}
          justifyContent="center"
          alignItems="center"
        >
          <Box flex={1} maxW="sm" mx={15} pt={10}>
            <Text
              fontSize="2xl"
              p={2}
              borderRadius={4}
              boxShadow="0 1px 5px rgba(0,0,0,0.3)"
            >
              <span>Total Compra:</span>
              <span
                style={{
                  fontWeight: "700",
                  color: "#315238",
                  position: "relative",
                  top: "3px",
                  display: "inline-block",
                  textAlign: "right",
                  marginLeft: "5px",
                }}
              >
                ${count}
              </span>
            </Text>
            <WalletMercadoPago products={storageCartShopping} />
          </Box>
          <Link to={`/detail/f9573dec-615f-4fb8-97d0-68f1589b5934`}>
            <Image
              src={imageBannerOferta}
              alt="cart"
              objectFit="cover"
              mt={5}
              boxShadow="0px 5px 15px rgba(0, 0, 0, 0.2)"
              transition="transform 0.2s ease-in-out"
              _hover={{
                transform: "translateY(-3px) scale(0.85)",
              }}
              transform="scale(0.8)"
            />
          </Link>
        </Flex>
      </Flex>

      <Carousel />
      <Footer />
    </Flex>
  );
};

export default CartPayPage;

// import { Box, Text, Heading, Stack, Button } from "@chakra-ui/react";
// import { useSelector } from "react-redux"
// import Footer from '../Footer/Footer';
// import ButtonVolver from '../../elements/ButtonVolver';
// import CardBookCart from "./CardBookCart";
// import WalletMercadoPago from "../WalletMercadoPago/WalletMercadoPago";
// import { Link } from "react-router-dom";

// const CartPayPage = () => {
//   const [storageCartShopping, count] = useSelector(({ cart_shopping }) => {
//     const count = cart_shopping.reduce((init, { price, quantity }) => {
//       return init + (price * quantity);
//     }, 0);

//     return [cart_shopping, count.toFixed(2)]
//   });

//   return (
//     <Stack p={2}>
//       <Box>
//         <ButtonVolver />
//         <Heading p={2} textAlign={"center"} fontSize="4xl">Mi Carrito de Compras</Heading>
//       </Box>
//       {
//         storageCartShopping.length ?
//           <>
//             <Box bg="#009a3619" maxW='4xl' w="100%" m={'0 auto'} p={2}>
//               {
//                 storageCartShopping.map((book) => (
//                   <CardBookCart key={book.IdBook} {...book} />
//                 ))
//               }
//             </Box>
//             <Box maxW="sm" mx="auto">
//               <Text fontSize="2xl" p={2} borderRadius={4} boxShadow="0 1px 5px rgba(0,0,0,0.3)">
//                 <span>Total Compra:</span>
//                 <span style={{ fontWeight: "600" }}> ${count}</span>
//               </Text>
//               <WalletMercadoPago products={storageCartShopping} />
//             </Box>
//           </>
//           : <>
//               <Box maxW="xl" mx="auto" textAlign="center">
//                 <Text fontSize="2xl">Aún no tienes Elementos en el Carrito</Text>
//                 <Link to="/home">
//                   <Button bg="#315238" color="white">Agrega Uno</Button>
//                 </Link>
//               </Box>
//             </>
//       }
//       <Footer />
//     </Stack>
//   )
// }

// export default CartPayPage

{
  /* <Flex flex={1} mb={5}>
        <Box
          flex={4}
          ml={10}
          mr={10}
          overflowY="auto"
          bg="brand.tertiary"
          boxShadow="0 2px 4px rgba(0,0,0,0.1)"
          borderRadius="4px"
          padding="10px"
          maxHeight="calc(108vh - 200px)"
          css={{
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#a3c5aa",
              borderRadius: "5px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#448f53",
              borderRadius: "5px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#448f53",
            },
          }}
        >
          {storageCartShopping.length ? (
            <Stack spacing={4}>
              {storageCartShopping.map((book) => (
                <CardBookCart key={book.IdBook} {...book} />
              ))}
            </Stack>
          ) : (
            <Box maxW="xl" mx="auto" textAlign="center">
              <Text fontSize="2xl">Aún no tienes Elementos en el Carrito</Text>
              <Link to="/home">
                <Button bg="#315238" color="white">
                  Agrega Uno
                </Button>
              </Link>
            </Box>
          )}
        </Box>
        <Box flex={1} maxW="sm" mx={15} pt={40}>
          <Text
            fontSize="2xl"
            p={2}
            borderRadius={4}
            boxShadow="0 1px 5px rgba(0,0,0,0.3)"
          >
            <span>Total Compra:</span>
            <span
              style={{
                fontWeight: "700",
                color: "#315238",
                position: "relative",
                top: "3px",
                display: "inline-block",
                textAlign: "right",
                marginLeft: "5px",
              }}
            >
              ${count}
            </span>
          </Text>
          <WalletMercadoPago products={storageCartShopping} />
        </Box>
      </Flex> */
}
