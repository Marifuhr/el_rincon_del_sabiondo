import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';
const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
import { Link } from "react-router-dom";
import formatDate from '../../utils/formatDate';

function Cards({ props }) {
  return (
    <Link to={`/detail/${props.IdBook}`}>
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'250px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: '180px',
            h: '200px',
            pos: 'absolute',
            top: 5,
            left:10,
            backgroundImage: `url(${props.image})`,
            filter: 'blur(25px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(10px)',
            },
          }}>
          <Image
            rounded="lg"
            width="100%" // Ajusta el ancho al 100% del contenedor
            height="100%" // Ajusta la altura al 100% del contenedor
            objectFit="contain" // Ajusta la imagen para que quepa dentro del contenedor sin recortarse ni deformarse
            src={props.image}
            alt="Book Cover"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {props.Authors[0].name}
          </Text>
          <Heading
            fontSize={'md'}
            fontFamily={'body'}
            fontWeight={500}
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            maxWidth="100%" // Aplica un ancho máximo del 100% del contenedor
          >
          {props.title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
              <Text fontWeight={500} background={'#70a57b'} color={'white'} py={1} px={2} borderRadius={5} fontSize={'sm'}>
              {props.languageBook.language}
            </Text>
              <Text fontWeight={500} background="#bfbfbf" color={'white'} py={1} px={2} borderRadius={5} fontSize={'sm'}>
              {formatDate(props.datePublication)}
            </Text>
          </Stack>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'} mb={0}>
            ${props.price}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
    </Link>
  );
}

export default Cards;
