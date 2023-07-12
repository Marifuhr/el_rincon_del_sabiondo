import React, { useState, useRef } from "react";
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
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from '@chakra-ui/react';

import { useUserInfo } from "../../context/ProviderUser";
import axios from "axios";

export default function EditProfile() {
  const { user } = useUserInfo();
  console.log(user);

  const [name, setName] = useState(null);
  const [picture, setPicture] = useState(null);
  const [address, setAddress] = useState(null);
  const [postalCode, setPostalCode] = useState(null);
  const [province, setProvince] = useState(null);
  const [country, setCountry] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [updateError, setUpdateError] = useState(null);

  const fileInputRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_URL_ENDPOINT}/users/${user.IdUser}`,
        {
          name: name ? name : user.name,
          picture: picture ? picture : user.picture,
          address: address ? address : user.address,
          province: province ? province : user.province,
          postalCode: postalCode ? postalCode : user.postalCode,
          country: country ? country : user.country,
        }
      );
      console.log(response.data);
      if (response.status === 200) {
        if (response.data.error) {
          setUpdateError(response.data.error);
          setUpdateSuccess(false);
        } else {
          setUpdateSuccess(true);
          setName("");
          setPicture(null);
          setAddress("");
          setPostalCode("");
          setProvince("");
          setCountry("");
        }
      } else {
        setUpdateError("An error occurred during the update.");
        setUpdateSuccess(false);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      setUpdateError("An error occurred during the update.");
      setUpdateSuccess(false);
    }
  }

  const handleImageSelect = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "srpd9jzh");
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/djbpbygx4/image/upload`,
          formData
        );
        const imageUrl = response.data.secure_url;
        setPicture(imageUrl);
      } catch (error) {
        console.error("Error al cargar la imagen a Cloudinary:", error);
      }
    }
  };

  const handleOpenFileDialog = () => {
    fileInputRef.current.click();
  };

  return (
    <Box>
      <Flex marginTop={"-10px"} align={"center"} justify={"center"}>
        <Stack
          spacing={5}
          w={"full"}
          maxW={"md"}
          rounded={"xl"}
          boxShadow={"lg"}
          p={8}
          my={25}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            Edit Profile
          </Heading>
          <FormLabel>User Icon</FormLabel>
          <Stack direction={["column", "row"]} spacing={6}>
            <Center>
              <Avatar size="xl" src={picture ? picture : user.picture}></Avatar>
            </Center>
            <Center w="full">
              <Button w="full" onClick={handleOpenFileDialog}>
                Change Icon
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageSelect}
                  style={{ display: "none" }}
                  ref={fileInputRef}
                />
              </Button>
            </Center>
          </Stack>
          <FormControl id={user.name} isRequired>
            <FormLabel>User Name</FormLabel>
            <Input
              placeholder="User Name"
              _placeholder={{ color: "gray.500" }}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id={user.country} isRequired>
            <FormLabel>Country</FormLabel>
            <Input
              placeholder="country"
              _placeholder={{ color: "gray.500" }}
              type="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </FormControl>
          <FormControl id={user.province} isRequired>
            <FormLabel>Provincia</FormLabel>
            <Input
              placeholder="province"
              _placeholder={{ color: "gray.500" }}
              type="province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            />
          </FormControl>
          <FormControl id={user.address} isRequired>
            <FormLabel>Address</FormLabel>
            <Input
              placeholder="address"
              _placeholder={{ color: "gray.500" }}
              type="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormControl>
          <FormControl id={user.postalCode} isRequired>
            <FormLabel>Postal Code</FormLabel>
            <Input
              placeholder="PostalCode"
              _placeholder={{ color: "gray.500" }}
              type="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </FormControl>
          {updateError && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>{updateError}</AlertTitle>
              <CloseButton
                position="absolute"
                right="8px"
                top="8px"
                onClick={() => setUpdateError(null)}
              />
            </Alert>
          )}
          {updateSuccess && (
            <Alert status="success">
              <AlertIcon />
              <AlertTitle>Update successful.</AlertTitle>
              <CloseButton
                position="absolute"
                right="8px"
                top="8px"
                onClick={() => setUpdateSuccess(false)}
              />
            </Alert>
          )}
          <Stack spacing={6} direction={["column", "row"]}>
            <Button
              bg={"red.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "red.500",
              }}
              onClick={() => {
                setName(null);
                setPicture(null);
              }}
            >
              Cancel
            </Button>
            <Button
              bg={"blue.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "blue.500",
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