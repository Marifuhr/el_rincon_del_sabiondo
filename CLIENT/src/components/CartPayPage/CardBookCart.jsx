import { Box, Text, Image, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import ButtonDeleteBookCart from '../ShoppingCart/ButtonDeleteBookCart';
import { Link } from 'react-router-dom';
import ButtonAddBookCart from '../ShoppingCart/ButtonAddBookCart';
import { useSelector } from 'react-redux';

const CardBookCart = ({image, title, description, IdBook, price, quantity}) => {

    const book = useSelector(({cart_shopping}) => {
        return cart_shopping.find(({IdBook:Id}) => {
            return Id === IdBook
        })
    });

    return (
        <Stack position="relative" maxH={{base:'100%', md:'300px'}} bg="rgba(0,0,0,0.1)" borderRadius={6} overflow="hidden" my={2}>
            <Flex flexWrap={{base:'wrap',md:"nowrap"}} >
                <Box maxHeight={{md:"sm", base:"200px"}} minH="100%" minWidth="100px" w="100%" overflow="hidden">
                    <Image objectFit="cover" objectPosition="top" minH="100%" minW="100%" src={image} alt={title} />
                </Box>
                <Box p={4}>
                    <Link to={`/detail/${IdBook}`}>
                        <Text _hover={{color:"#163e1e", textDecoration:"underline"}} color="rgb(39, 39, 39)" fontWeight={600}>{title}</Text>
                    </Link>
                    <Text noOfLines={3}>{description}</Text>
                    <Flex gap={{md:10, base:2}} flexWrap={{md:"nowrap", base:'wrap'}} alignItems="center">
                        <Box bg="#70a57b" whiteSpace="nowrap" fontWeight="bold" borderRadius={3} px={4} py={1} boxShadow="0 1px 5px rgba(0,0,0,0.3)">
                            <span>Precio Unitario</span>
                            <span style={{color:'#163e1e'}}> ${price}</span>
                        </Box>
                        <Box bg="#70a57b" whiteSpace="nowrap" fontWeight="bold" borderRadius={3} px={4} py={1} boxShadow="0 1px 5px rgba(0,0,0,0.3)">
                            <span>Cantidad Agregados: </span>
                            <span style={{color:'#163e1e'}}>{quantity}</span>
                        </Box>
                    </Flex>
                    <Box maxW="sm" my={2} py={1} width="min-content" bg="#70a57b" whiteSpace="nowrap" fontWeight="bold" borderRadius={3} px={4} boxShadow="0 1px 5px rgba(0,0,0,0.3)">
                        <span>Total: </span>
                        <span style={{color:'#ededed'}}>{Number(price * quantity).toFixed(2)}</span>
                    </Box>
                    <Box py={2}>
                        <ButtonDeleteBookCart IdBook={IdBook} />
                    </Box>
                </Box>
            </Flex>
            <ButtonAddBookCart book={book} attributesStyles={{position:"absolute", top:"2", right:"4"}}/>
        </Stack>
    )
}

export default CardBookCart