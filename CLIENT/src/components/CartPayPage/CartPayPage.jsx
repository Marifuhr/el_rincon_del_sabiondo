import { Box, Text, Heading, Stack, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux"
import Footer from '../Footer/Footer';
import ButtonVolver from '../../elements/ButtonVolver';
import CardBookCart from "./CardBookCart";
import WalletMercadoPago from "../WalletMercadoPago/WalletMercadoPago";
import { Link } from "react-router-dom";

const CartPayPage = () => {
  const [storageCartShopping, count] = useSelector(({ cart_shopping }) => {
    const count = cart_shopping.reduce((init, { unit_price, quantity }) => {
      return init + (unit_price * quantity);
    }, 0);

    return [cart_shopping, count.toFixed(2)]
  });

  return (
    <Stack p={2}>
      <Box>
        <ButtonVolver />
        <Heading p={2} textAlign={"center"} fontSize="4xl">Mi Carrito de Compras</Heading>
      </Box>
      {
        storageCartShopping.length ?
          <>
            <Box bg="#009a3619" maxW='4xl' w="100%" m={'0 auto'} p={2}>
              {
                storageCartShopping.map((book) => (
                  <CardBookCart key={book.IdBook} {...book} />
                ))
              }
            </Box>
            <Box maxW="sm" mx="auto">
              <Text fontSize="2xl" p={2} borderRadius={4} boxShadow="0 1px 5px rgba(0,0,0,0.3)">
                <span>Total Compra:</span>
                <span style={{ fontWeight: "600" }}> ${count}</span>
              </Text>
              <WalletMercadoPago products={storageCartShopping} />
            </Box>
          </>
          : <>
              <Box maxW="xl" mx="auto" textAlign="center">
                <Text fontSize="2xl">Aún no tienes Elementos en el Carrito</Text>
                <Link to="/home">
                  <Button bg="#315238" color="white">Agrega Uno</Button>
                </Link>
              </Box>
            </>
      }
      <Footer />
    </Stack>
  )
}

export default CartPayPage