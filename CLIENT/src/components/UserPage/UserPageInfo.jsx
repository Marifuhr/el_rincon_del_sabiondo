import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  chakra,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  ListItem,
  List,
  useColorModeValue,
  Avatar,
  Center,
SimpleGrid,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useUserInfo } from "../../context/ProviderUser";
import formatDate from "../../utils/formatDate";
import TestimonialCard from "../Testimonial/TestimonialCard";

export default function Simple() {
  const { user } = useUserInfo();
  const [reviews, setReviews] = useState([]);
  const [shopping, setShopping] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const firstThreeReviews = user?.Reviews?.slice(0, 3) || [];

  const handleMostrarTodosClick = () => {
    setShowAllReviews(true);
  };



  useEffect(() => {
    setReviews(user.Reviews || []);
  }, [user.Reviews]);

  useEffect(() => {
    setShopping(user.SellingTotals || []);
    setTotalPrice(
      user.SellingTotals?.reduce((total, book) => total + book.price, 0) || 0
    );
  }, [user.SellingTotals]);

  return (
    <Box>
      <Center py={6}>
      <Box
        maxW={'350px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={user.picture}
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
            {user.name}
            </Heading>
            <Text color={'gray.500'}>{user.role}</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'left'}>
              <Text fontSize={'sm'} color={'gray.500'}>
              Email:
              </Text>
              <Text fontSize={'sm'} color={'gray.500'}>
              Pais:
              </Text>
              <Text fontSize={'sm'} color={'gray.500'}>
              Provincia:
              </Text>
              <Text fontSize={'sm'} color={'gray.500'}>
              Dirección:
              </Text>
              <Text fontSize={'sm'} color={'gray.500'}>
              Código Postal:
              </Text>
              <Text fontSize={'sm'} color={'gray.500'}>
              Actualización:
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontSize={'sm'} color={'gray.500'}>
              {user.email}
              </Text>
              <Text fontSize={'sm'} color={'gray.500'}>
              {user.country}
              </Text>
              <Text fontSize={'sm'} color={'gray.500'}>
              {user.province}
              </Text>
              <Text fontSize={'sm'} color={'gray.500'}>
              {user.address}
              </Text>
              <Text fontSize={'sm'} color={'gray.500'}>
              {user.postalCode}
              </Text>
              <Text fontSize={'sm'} color={'gray.500'}>
              {formatDate(user.updatedAt)}
              </Text>
            </Stack>
          </Stack>
          <Link to={`/profile/myProfile`}>
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Editar
            </Button>
          </Link>
        </Box>
      </Box>
    </Center>


      <Box>
        <Text
          fontSize={{ base: "16px", lg: "18px" }}
          color={useColorModeValue("yellow.500", "yellow.300")}
          fontWeight={"500"}
          textTransform={"uppercase"}
          mb={"4"}
        >
          Reviews
        </Text>
        <SimpleGrid
        // columns={{ base: 1, xl: 2 }}
        spacing={{ base: 4, md: 10 }}
        width={"full"}
        mt={16}
        mb={16}
        mx={"auto"}
        marginLeft={{ base: "0", xl: "20" }}
      >
        { firstThreeReviews.map((review, index) => (
              <TestimonialCard key={index} review={review} />
            ))}
       
      </SimpleGrid>
       
      </Box>

    </Box>
  );
}
