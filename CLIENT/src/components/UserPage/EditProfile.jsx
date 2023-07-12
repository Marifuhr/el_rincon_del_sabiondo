
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
  const { user } = useUserInfo();
  console.log(user);

const [name, setName] = useState("");
const [picture, setPicture] = useState("");
 const [address, setAddress] = useState("");
 const [postalCode, setPostalCode] = useState("");
 const [province, setProvince] = useState("");
 const [country, setCountry] = useState("");


function handleSubmit(e) {
  e.preventDefault();
axios.put(`${import.meta.env.VITE_URL_ENDPOINT}/users/${user.id}`, {
  name,
  picture, 
  address,
  postalCode,
  country, 
})
 
}
const handleImageSelect = async (event) => {
  const file = event.target.files[0];
  if (file) {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", 'srpd9jzh');
      const response = await axios.post(`https://api.cloudinary.com/v1_1/djbpbygx4/image/upload`,formData);
      const imageUrl = response.data.secure_url;
      setPicture(imageUrl);
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
          {/* <FormControl id={user.icon}> */}
            <FormLabel>User Icon</FormLabel>
            <Stack direction={['column', 'row']} spacing={6}>
              <Center>
                <Avatar size="xl" src={user.picture}>
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
          {/* </FormControl> */}
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
          <FormControl id={user.country} isRequired>
            <FormLabel>Country</FormLabel>
            <Input
              placeholder="country"
              _placeholder={{ color: 'gray.500' }}
              type="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </FormControl>
          <FormControl id={user.province} isRequired>
            <FormLabel>Address</FormLabel>
            <Input
              placeholder="province"
              _placeholder={{ color: 'gray.500' }}
              type="province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            />
          </FormControl>
         <FormControl id={user.address} isRequired>
            <FormLabel>Address</FormLabel>
            <Input
              placeholder="address"
              _placeholder={{ color: 'gray.500' }}
              type="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormControl>
          <FormControl id={user.postalCode} isRequired>
            <FormLabel>Postal Code</FormLabel>
            <Input
              placeholder="PostalCode"
              _placeholder={{ color: 'gray.500' }}
              type="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
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
