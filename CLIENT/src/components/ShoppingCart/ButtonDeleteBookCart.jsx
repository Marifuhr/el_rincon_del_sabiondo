import { Button, Box, Flex, Center } from "@chakra-ui/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remoteBookCart } from "../../Redux/Action/Index";

const ButtonDeleteBookCart = ({ IdBook }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(remoteBookCart(IdBook));
  };

  return (
    <Button
      size="sm"
      colorScheme="red"
      onClick={handleDelete}
      gap={2}
      _hover={{
        background: "red",
        borderRadius: "4px",
        boxShadow: "lg",
      }}
    >
      <Center>
        <Flex alignItems="center">
          <Box fontSize={18} p="0">
            <RiDeleteBin5Line />
          </Box>
        </Flex>
      </Center>
      Eliminar del Carrito
    </Button>
  );
};

export default ButtonDeleteBookCart;

// import { Button, Box, Flex } from '@chakra-ui/react'
// import { RiDeleteBin5Line } from 'react-icons/ri';
// import { useDispatch } from 'react-redux';
// import { remoteBookCart } from '../../Redux/Action/Index';

// const ButtonDeleteBookCart = ({ IdBook }) => {
//     const dispatch = useDispatch();

//     const handleDelete = () => {
//         dispatch(remoteBookCart(IdBook));
//     };

//     return (
//         <Button colorScheme='red' onClick={handleDelete}>
//             <Flex alignItems="center">
//                 <Box fontSize={20} pr={2}><RiDeleteBin5Line /></Box>
//                 <span>Eliminar del Carrito</span>
//             </Flex>
//         </Button>
//     )
// }

// export default ButtonDeleteBookCart
