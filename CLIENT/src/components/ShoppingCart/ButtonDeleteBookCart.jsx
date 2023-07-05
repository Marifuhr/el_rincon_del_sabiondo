import { Button, Box, Flex } from '@chakra-ui/react'
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { remoteBookCart } from '../../Redux/Action/Index';

const ButtonDeleteBookCart = ({ IdBook }) => {
    const dispatch = useDispatch();
    
    const handleDelete = () => {
        dispatch(remoteBookCart(IdBook));
    };

    return (
        <Button colorScheme='red' onClick={handleDelete}>
            <Flex alignItems="center">
                <Box fontSize={20} pr={2}><RiDeleteBin5Line /></Box>
                <span>Eliminar del Carrito</span>
            </Flex>
        </Button>
    )
}

export default ButtonDeleteBookCart