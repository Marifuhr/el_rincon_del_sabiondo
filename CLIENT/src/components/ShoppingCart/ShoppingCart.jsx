import { Box, Text } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const hoverCart = {
    transform: "scale(1.05)"
};

function ShoppingCart() {
    return (
        <Link to="/cart_pay">
            <Box position="relative" cursor="pointer" transition="all .1s ease" _hover={hoverCart}>
                <Box fontSize={30} color={'white'} bg="#449053" borderRadius="50%" p="10px" boxShadow="0 1px 15px rgba(0,0,0,.3)">
                    <AiOutlineShoppingCart/>
                </Box>
                <Box position="absolute" width={5} height={5} bg="#254f2d" boxShadow="0 1px 15px rgba(0,0,0,.3)" top={-1} borderRadius="50%" textAlign="center" right={-2}>
                    <Text color="white" fontWeight={600}>1</Text>
                </Box>
            </Box>
        </Link>
    )
}

export default ShoppingCart;