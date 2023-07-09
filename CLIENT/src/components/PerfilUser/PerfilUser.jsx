// import React, { useState } from 'react';
// import {useDispatch} from 'react-redux';
// import {
//   Progress,
//   Box,
//   ButtonGroup,
//   Button,
//   Heading,
//   Flex,
//   FormControl,
//   GridItem,
//   FormLabel,
//   Input,
//   Select,
//   SimpleGrid,
//   InputLeftAddon,
//   InputGroup,
//   Textarea,
//   FormHelperText,
//   InputRightElement,
// } from '@chakra-ui/react';

// import { useToast } from '@chakra-ui/react';
// import { createUser } from '../../Redux/Action/Index';
// const Form1 = () => {
//   const [show, setShow] = React.useState(false);
//   const handleClick = () => setShow(!show);
//   return (
//     <>
//       <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
//         Nuevo Usuario
//       </Heading>
//       <Flex>
//         <FormControl mr="5%">
//           <FormLabel htmlFor="first-name" fontWeight={'normal'}>
//            Nombre
//           </FormLabel>
//           <Input id="first-name" placeholder="First name" />
//         </FormControl>

//         <FormControl>
//           <FormLabel htmlFor="last-name" fontWeight={'normal'}>
//             Apellido
//           </FormLabel>
//           <Input id="last-name" placeholder="First name" />
//         </FormControl>
//       </Flex>
//       <FormControl mt="2%">
//         <FormLabel htmlFor="email" fontWeight={'normal'}>
//           Email 
//         </FormLabel>
//         <Input id="email" type="email" />
//         <FormHelperText>We'll never share your email.</FormHelperText>
//       </FormControl>

//       <FormControl>
//         <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
//           Contraseña
//         </FormLabel>
//         <InputGroup size="md">
//           <Input
//             pr="4.5rem"
//             type={show ? 'text' : 'password'}
//             placeholder="Enter password"
//           />
//           <InputRightElement width="4.5rem">
//             {/* <Button h="1.75rem" size="sm" onClick={handleClick}>
//               {show ? 'Hide' : 'Show'}
//             </Button> */}
//           </InputRightElement>
//         </InputGroup>
//       </FormControl>
//     </>
//   );
// };

// const Form2 = () => {
//   return (
//     <>
//       <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
//         Detalle de Usuario
//       </Heading>
//       <FormControl as={GridItem} colSpan={[6, 3]}>
//         <FormLabel
//           htmlFor="country"
//           fontSize="sm"
//           fontWeight="md"
//           color="gray.700"
//           _dark={{
//             color: 'gray.50',
//           }}>
//          País / Región
//         </FormLabel>
//         <Select
//           id="country"
//           name="country"
//           autoComplete="country"
//           placeholder="Select option"
//           focusBorderColor="brand.400"
//           shadow="sm"
//           size="sm"
//           w="full"
//           rounded="md">
//           <option>Argentina</option>
//           <option>Bolivia</option>
//           <option>Brasil</option>
//           <option>Canada</option>
//           <option>Chile</option>
//           <option>Colombia</option>
//           <option>Ecuador</option>
//           <option>Mexico</option>
//           <option>Paraguay</option>
//           <option>Peru</option>
//           <option>Uruguay</option>
//           <option>Venezuela</option>
//         </Select>
//       </FormControl>

//       <FormControl as={GridItem} colSpan={6}>
//         <FormLabel
//           htmlFor="street_address"
//           fontSize="sm"
//           fontWeight="md"
//           color="gray.700"
//           _dark={{
//             color: 'gray.50',
//           }}
//           mt="2%">
//          Dirección
//         </FormLabel>
//         <Input
//           type="text"
//           name="street_address"
//           id="street_address"
//           autoComplete="street-address"
//           focusBorderColor="brand.400"
//           shadow="sm"
//           size="sm"
//           w="full"
//           rounded="md"
//         />
//       </FormControl>

//       <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
//         <FormLabel
//           htmlFor="city"
//           fontSize="sm"
//           fontWeight="md"
//           color="gray.700"
//           _dark={{
//             color: 'gray.50',
//           }}
//           mt="2%">
//           Ciudad
//         </FormLabel>
//         <Input
//           type="text"
//           name="city"
//           id="city"
//           autoComplete="city"
//           focusBorderColor="brand.400"
//           shadow="sm"
//           size="sm"
//           w="full"
//           rounded="md"
//         />
//       </FormControl>

//       <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
//         <FormLabel
//           htmlFor="state"
//           fontSize="sm"
//           fontWeight="md"
//           color="gray.700"
//           _dark={{
//             color: 'gray.50',
//           }}
//           mt="2%">
//          Provincia
//         </FormLabel>
//         <Input
//           type="text"
//           name="state"
//           id="state"
//           autoComplete="state"
//           focusBorderColor="brand.400"
//           shadow="sm"
//           size="sm"
//           w="full"
//           rounded="md"
//         />
//       </FormControl>

//       <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
//         <FormLabel
//           htmlFor="postal_code"
//           fontSize="sm"
//           fontWeight="md"
//           color="gray.700"
//           _dark={{
//             color: 'gray.50',
//           }}
//           mt="2%">
//           Código Postal
//         </FormLabel>
//         <Input
//           type="text"
//           name="postal_code"
//           id="postal_code"
//           autoComplete="postal-code"
//           focusBorderColor="brand.400"
//           shadow="sm"
//           size="sm"
//           w="full"
//           rounded="md"
//         />
//       </FormControl>
//     </>
//   );
// };

// const Form3 = () => {
//   return (
//     <>
//       <Heading w="100%" textAlign={'center'} fontWeight="normal">
//         Redes sociales
//       </Heading>
//       <SimpleGrid columns={1} spacing={6}>
//         <FormControl as={GridItem} colSpan={[3, 2]}>
//           <FormLabel
//             fontSize="sm"
//             fontWeight="md"
//             color="gray.700"
//             _dark={{
//               color: 'gray.50',
//             }}>
//            Sitio web
//           </FormLabel>
//           <InputGroup size="sm">
//             <InputLeftAddon
//               bg="gray.50"
//               _dark={{
//                 bg: 'gray.800',
//               }}
//               color="gray.500"
//               rounded="md">
//               http://
//             </InputLeftAddon>
//             <Input
//               type="tel"
//               placeholder="www.example.com"
//               focusBorderColor="brand.400"
//               rounded="md"
//             />
//           </InputGroup>
//         </FormControl>

//         <FormControl id="email" mt={1}>
//           <FormLabel
//             fontSize="sm"
//             fontWeight="md"
//             color="gray.700"
//             _dark={{
//               color: 'gray.50',
//             }}>
//            Email
//           </FormLabel>
//           <Textarea
//             placeholder="you@example.com"
//             rows={3}
//             shadow="sm"
//             focusBorderColor="brand.400"
//             fontSize={{
//               sm: 'sm',
//             }}
//           />
//           <FormHelperText>
//             Breve descripción de usuario
//           </FormHelperText>
//         </FormControl>
//       </SimpleGrid>
//     </>
//   );
// };

// export default function multistep() {
//   const toast = useToast();
//   const [step, setStep] = useState(1);
//   const [progress, setProgress] = useState(33.33);
//   const dispatch = useDispatch();

//   const handleCreateUser = (userData) => {
//     dispatch(createUser(userData));
//   };  


//   return (
//     <>
//       <Box
//         borderWidth="1px"
//         rounded="lg"
//         shadow="1px 1px 3px rgba(0,0,0,0.3)"
//         maxWidth={800}
//         p={6}
//         m="10px auto"
//         as="form">
//         <Progress
//           hasStripe
//           value={progress}
//           mb="5%"
//           mx="5%"
//           isAnimated></Progress>
//         {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
//         <ButtonGroup mt="5%" w="100%">
//           <Flex w="100%" justifyContent="space-between">
//             <Flex>
//               <Button
//                 onClick={() => {
//                   setStep(step - 1);
//                   setProgress(progress - 33.33);
//                 }}
//                 isDisabled={step === 1}
//                 colorScheme="teal"
//                 variant="solid"
//                 w="7rem"
//                 mr="5%">
//                 Atrás
//               </Button>
//               <Button
//                 w="7rem"
//                 isDisabled={step === 3}
//                 onClick={() => {
//                   setStep(step + 1);
//                   if (step === 3) {
//                     setProgress(100);
//                   } else {
//                     setProgress(progress + 33.33);
//                   }
//                 }}
//                 colorScheme="teal"
//                 variant="outline">
//                 Siguiente
//               </Button>
//             </Flex>
//             {step === 3 ? (
//               <Button
//                 w="7rem"
//                 colorScheme="red"
//                 variant="solid"
//                 onClick={() => {
//                     const userData = {
//                         // Obtener datos del usuario de los componentes Form1, Form2, Form3
//                       };
//                       handleCreateUser(userData);
//                   toast({
//                     title: 'Creado',
//                     description: "Usuario Creado con éxito.",
//                     status: 'success',
//                     duration: 3000,
//                     isClosable: true,
//                   });
//                 }}>
//                 Crear
//               </Button>
//             ) : null}
//           </Flex>
//         </ButtonGroup>
//       </Box>
//     </>
//   );
// }
import React from 'react'

export default function PerfilUser() {
  return (
    <div>
      Perfil
    </div>
  )
}
