
import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,

} from '@chakra-ui/react';
import Footer from '../Footer/Footer';
import ButtonVolver from "../../elements/ButtonVolver";

const IBlogTags = {
  gs: [],
  marginTop: undefined
};

// const BlogTags = (props) => {
//   return (
//     <HStack spacing={2} marginTop={props.marginTop}>
//       {props.tags.map((tag) => {
//         return (
//           <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
//             {tag}
//           </Tag>
//         );
//       })}
//     </HStack>
//   );
// };

const BlogAuthorProps = {
  date: Date,
  name: ""
}

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {
  return ( 
    <>
    <ButtonVolver />
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">Sobre Nosotros</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '92%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={
                  'https://www.danielcolombo.com/wp-content/uploads/2020/11/mision-vision-valores-pared-carteles-daniel-colombo.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          {/* <BlogTags tags={['Engineering', 'Product']} /> */}
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Nuestra Misión
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            "En El Rincón del Sabiondo, somos un grupo de apasionados estudiantes de HENRY que comparten un amor por la lectura y la programación. Nos hemos unido para crear una experiencia de compra en línea única para los amantes de los libros de todo el mundo. Desde los clásicos atemporales hasta los éxitos de ventas más recientes, nuestra selección de títulos es curada cuidadosamente para ofrecer algo para todos los gustos. Nos esforzamos por brindar un excelente servicio al cliente y una experiencia de compra sin problemas. ¡Gracias por elegirnos para satisfacer sus necesidades de lectura!"
          </Text>
          {/* <BlogAuthor name="María R. Fuhr" date={new Date('3/7/2023')} /> */}
        </Box>
      </Box>
      <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Nuestra Visión
            </Link>
          </Heading>
      <Divider marginTop="4" />
      <Wrap spacing="1rem" marginTop="8">
        <WrapItem width={{ base: '80%', sm: '70%', md: '70%', lg: '50%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://elblogdeisabelaranda.files.wordpress.com/2014/12/vision.jpg'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
            {/* <BlogTags tags={['Engineering', 'Product']} marginTop="3" /> */}
            {/* <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Some blog title
              </Link>
            </Heading> */}
        <Text as="p" fontSize="lg" marginTop="8">
              " Nuestra visión es ser la principal tienda en línea de libros a nivel mundial, ofreciendo la mejor selección de títulos, precios competitivos y un servicio excepcional. Nos esforzamos por ser una app líder en innovación y tecnología, brindando una experiencia de compra en línea fácil y cómoda para nuestros clientes. Aspiramos a ser reconocidos como un actor clave en la promoción de la lectura y la educación, y en la difusión de la cultura en todo el mundo. Nuestro objetivo es ser una empresa responsable y sostenible, comprometida con la protección del medio ambiente y la promoción de valores éticos y sociales. Creemos que los libros pueden cambiar vidas, y estamos dedicados a hacer que la lectura sea accesible y agradable para todos."
            </Text>
          
          </Box>
        </WrapItem>
      </Wrap>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Box
            w="fit-content"
            bgGradient="radial(orange.500 1px, transparent 1px)"
            backgroundSize="20px 20px"
            opacity="0.4"
            position="absolute"
            zIndex="-1"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            p="2"
            borderRadius="md"
          />
           <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Nuestros Valores
            </Link>
          </Heading>
        <Text as="p" fontSize="xl" >
          <strong>Pasión por la lectura:</strong> valoramos la lectura y creemos en su poder para enriquecer la vida de las personas.

        </Text>
        <Text as="p" fontSize="xl">
          <strong>Excelencia en el servicio al cliente:</strong> nos esforzamos por proporcionar un servicio excepcional y una experiencia de compra satisfactoria para nuestros clientes.
        </Text>
        <Text as="p" fontSize="xl">
          <strong>Honestidad y transparencia:</strong> valoramos la honestidad y la transparencia en nuestras operaciones comerciales y nos comprometemos a actuar con integridad en todas las situaciones.

        </Text>
        <Text as="p" fontSize="xl">
          <strong>Compromiso con la calidad:</strong> nos esforzamos por ofrecer productos de alta calidad a precios competitivos.

        </Text>
        <Text as="p" fontSize="xl">
      
          <strong>Responsabilidad social y ambiental:</strong> nos preocupamos por el impacto que tenemos en la sociedad y el medio ambiente, y nos comprometemos a ser una empresa responsable y sostenible.
        </Text>
        <Text as="p" fontSize="xl">
          <strong>Innovación y tecnología:</strong> valoramos la innovación y la tecnología y nos esforzamos por estar a la vanguardia de la industria del comercio electrónico de libros.
        </Text>
        <Text as="p" fontSize="xl">
          <strong>Respeto y diversidad:</strong> valoramos la diversidad y el respeto por las diferencias culturales y personales. Nos esforzamos por ser inclusivos y abiertos a todas las personas.
        </Text>
      </VStack>
    </Container>
    <Footer />
    </>
  );

};

export default ArticleList;