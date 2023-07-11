
import React, { useState } from "react";
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

import { useUserInfo } from "../../context/ProviderUser";
import axios from "axios";


export default function EditProfile() {

const [name, setName] = useState("");
const [picture, setPicture] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");

const { user } = useUserInfo();
console.log(user);


function handleSubmit(e) {
  e.preventDefault();
axios.put(`${import.meta.env.VITE_URL_ENDPOINT}/users/${user.id}`, {
  name,
  picture,  
})
 
}
const handleImageSelect = async (event) => {
  const file = event.target.files[0];
  if (file) {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", 'srpd9jzh');

      const response = await axios.post(
          `https://api.cloudinary.com/v1_1/djbpbygx4/image/upload`,
          formData
      );

      const imageUrl = response.data.secure_url;

      setPicture(imageUrl)
      
    } catch (error) {
      console.error("Error al cargar la imagen a Cloudinary:", error);
    }
  }
};
 

  return (
    <Box>
      <Flex
        marginTop={'-10px'}
        align={'center'}
        justify={'center'}
      >
        <Stack
          spacing={5}
          w={'full'}
          maxW={'md'}
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
                <Avatar size="xl" src={user.picture}>
                  {/* <AvatarBadge
                    as={IconButton}
                    size="sm"
                    rounded="full"
                    top="-10px"
                    colorScheme="red"
                    aria-label="remove Image"
                    icon={<SmallCloseIcon />}
                  /> */}
                </Avatar>
              </Center>
              <Center w="full">
                <Button w="full">Change Icon
                <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageSelect}
              style={{ display: "none" }}
            />
            </Button>
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
         {/* <FormControl id={user.email} isRequired>
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
          </FormControl> */}
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
                setPicture("");
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
