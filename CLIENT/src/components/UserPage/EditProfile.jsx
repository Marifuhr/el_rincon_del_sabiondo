// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { saveProfileChanges } from "../../Redux/Action/Index";
// import UserPage from "./UserPage";

// export default function EditProfile() {
//     const dispatch = useDispatch();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");



//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const profileData = {
//         name,
//         email,
//         password,
//       };
//       dispatch(saveProfileChanges(profileData));
//     setName("");
//     setEmail("");
//     setPassword("");
//   };

//   return (
//       <div>
// <UserPage />
//       <h2>Edit Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="submit">Save Changes</button>
//       </form>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveProfileChanges } from "../../Redux/Action/Index";
import UserPage from "./UserPage";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Box
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import useUserInfo from "../../hooks/useUserInfo";


export default function EditProfile() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useUserInfo();
  console.log(user);
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const profileData = {
      name,
      email,
      password,
    };
    dispatch(saveProfileChanges(profileData));
    setName("");
    setEmail("");
    setPassword("");
  };
//   const [perfil, setPerfil] = useState([]);

//   useEffect(() => {
//     const obtenerPerfil = async () => {
//       try {
//         // Realizar la solicitud a la base de datos para obtener el perfil del cliente
//         const response = await axios.get(`${import.meta.env.VITE_URL_ENDPOINT}/perfil?customerId=${customerId}`);
//         setPerfil(
// response.data
// ); // Actualizar el estado con el perfil del cliente
//       } catch (error) {
//         console.error('Error al obtener perfil:', error);
//       }
//     };

//      if (customerId) {
//       obtenerPerfil();
//      }
//   }, [customerId]);
  return (
    <Box >
          <UserPage />
      <Flex
        // minH={'1vh'}
        marginTop={'-10px'}
        align={'center'}
        justify={'center'}
        // bg={useColorModeValue('gray.50', 'gray.100')}
      >
        <Stack
          spacing={5}
          w={'full'}
          maxW={'md'}
        //   bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={8}
          my={25}
        >
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            Edit Profile
          </Heading>
          <FormControl id={user.icon}>
          <FormLabel>User Icon</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon />}
                />
              </Avatar>
            </Center>
            <Center w="full">
              <Button w="full">Change Icon</Button>
            </Center>
          </Stack>
        </FormControl>
          <FormControl id={user.name} isRequired>
            <FormLabel>User Name</FormLabel>
            <Input
              placeholder="User Name"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id={user.email} isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id={user.password} isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Password"
              _placeholder={{ color: 'gray.500' }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6} direction={['column', 'row']}>
            <Button
              bg={'red.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'red.500',
              }}
              onClick={() => {
                setName("");
                setEmail("");
                setPassword("");
              }}
            >
              Cancel
            </Button>
            <Button
              bg={'blue.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'blue.500',
              }}
              type="submit"
              onClick={handleSubmit}
            >
              Save Changes
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}
