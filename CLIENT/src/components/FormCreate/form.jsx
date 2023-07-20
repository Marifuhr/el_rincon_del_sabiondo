// import React, { useRef, useState } from "react";
// import { useDispatch } from "react-redux";
// import { createBook } from "../../Redux/Action/Index";
// import axios from "axios";
// import { Button } from "@chakra-ui/react";
// import InputForm from "./InputForm";
// import "./form.css";
// import validate from "./Validations/validation";
// import AlertComponent from "../Alert/AlertComponent";
// import ButtonVolver from "../../elements/ButtonVolver";

// const initialStateBook = {
//   title: "",
//   authors: "",
//   datePublication: "",
//   isbn: "",
//   publisher: "",
//   description: "",
//   price: 0,
//   image: "",
//   language: "",
//   numberPages: "",
//   category: "",
// };

// function FormCreate() {
//   const dispatch = useDispatch();
//   const [message, setMessage] = useState({ type: "", messageValue: "" });
//   const refIndicator = useRef(false);
//   const [book, setBook] = useState(initialStateBook);

//   const changeMessage = (type, messageValue) => {
//     setMessage({ type, messageValue });

//     if (!refIndicator.current) {
//       refIndicator.current = true;
//       setTimeout(() => {
//         setMessage((values) => ({ ...values, messageValue: "" }));
//         refIndicator.current = false;
//       }, 4000);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setBook((prevState) => {
//       const propsBook = {
//         ...prevState,
//         [name]: value,
//       };
//       changeMessage("error", validate(propsBook));
//       return propsBook;
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const errorLocalForm = validate(book);
//     changeMessage("error", errorLocalForm);

//     if (errorLocalForm) return;

//     //Envía la data por medio de la Action para crear un Libro
//     const { authors, category, ...res } = book;
//     const authorsArray = [authors];
//     const categoryArray = [category];
//     dispatch(
//       createBook({ ...res, authors: authorsArray, category: categoryArray })
//     );

//     //Reset form
//     changeMessage("success", `El libro ${book.title} ha sido creado con exito`);
//     setBook(initialStateBook);
//   };

//   const handleImageSelect = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       try {
//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("upload_preset", 'srpd9jzh');

//         const response = await axios.post(
//             `https://api.cloudinary.com/v1_1/djbpbygx4/image/upload`,
//             formData
//         );

//         const imageUrl = response.data.secure_url;

//         setBook((prevState) => ({
//           ...prevState,
//           image: imageUrl,
//         }));
//       } catch (error) {
//         console.error("Error al cargar la imagen a Cloudinary:", error);
//       }
//     }
//   };

//   return (
//     <div className="form-container">
//       <div className="form">
//         <div className="form-button">
//           <ButtonVolver />
//         </div>

//         <form onSubmit={handleSubmit} className="book-form">
//           <h1>Add Book</h1>
//           <InputForm
//             title="Titulo:"
//             name="title"
//             value={book.title}
//             onChange={handleChange}
//             classStyles="form-input"
//           />
//           <InputForm
//             title="Autor:"
//             name="authors"
//             value={book.authors}
//             onChange={handleChange}
//             classStyles="form-input"
//           />
//           <InputForm
//             title="Fecha de publicación:"
//             type="date"
//             name="datePublication"
//             value={book.datePublication}
//             onChange={handleChange}
//             classStyles="form-input"
//           />
//           <InputForm
//             title="ISBN:"
//             type="number"
//             name="isbn"
//             value={book.isbn}
//             onChange={handleChange}
//             classStyles="form-input"
//           />
//           <InputForm
//             title="Editorial:"
//             name="publisher"
//             value={book.publisher}
//             onChange={handleChange}
//             classStyles="form-input"
//           />
//           <InputForm
//             mode="textarea"
//             title="Descripción:"
//             name="description"
//             value={book.description}
//             onChange={handleChange}
//             classStyles="form-input"
//           />
//           <InputForm
//             title="Precio:"
//             name="price"
//             value={book.price}
//             onChange={handleChange}
//             classStyles="form-input"
//           />
//           <Button as="label" htmlFor="image" mt={2}>
//             Seleccionar imagen
//             <input
//               type="file"
//               id="image"
//               name="image"
//               accept="image/*"
//               onChange={handleImageSelect}
//               style={{ display: "none" }}
//             />
//           </Button>
//           {book.image && (
//             <img src={book.image} alt="Selected" className="selected-image" />
//           )}
//           <InputForm
//             title="Idioma (es,en):"
//             name="language"
//             value={book.language}
//             onChange={handleChange}
//             classStyles="form-input"
//           />
//           <InputForm
//             title="Número de Páginas:"
//             type="number"
//             name="numberPages"
//             value={book.numberPages}
//             onChange={handleChange}
//             classStyles="form-input"
//           />
//           <InputForm
//             title="Categorías:"
//             name="category"
//             value={book.category}
//             onChange={handleChange}
//             classStyles="form-input"
//           />
//           {message.messageValue && <AlertComponent {...message} />}
//           <Button type="submit" mt={4}>
//             Crear libro
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default FormCreate;

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
 
  Textarea,
  FormErrorMessage,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createBook } from "../../Redux/Action/Index";
import { Link } from "react-router-dom";
//import validate from "./Validations/validation";
export default function SignupCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const initialStateBook = {
    title: "",
    authors: "",
    image: "",
    language: "",
    numberPages: "",
    description: "",
    datePublication: "",
    publisher: "",
    category: "",
    isbn: "",
    price: 0,
  };
  const [book, setBook] = useState(initialStateBook);

  const onSubmit = async (data) => {
    //   const errorLocalForm = validate(data);
    //   changeMessage("error", errorLocalForm);

    //  if (errorLocalForm) return;
    try {
      //Envía la data por medio de la Action para crear un Libro
      const { authors, category, ...res } = data;
      const authorsArray = [authors];
      const categoryArray = [category];
      
      dispatch(
        createBook({ ...res, authors: authorsArray, category: categoryArray, image: book.image })
      );

      if (createBook) {
        setSuccessMessage(`El libro ${data.title} ha sido creado con exito`);
        //setErrorMessage("");
      } 
    } catch (error) {
      setErrorMessage(`Error al crear el libro: ${data.title}`, error);
      //setSuccessMessage("");
    }
  };

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
        setBook((prevState) => ({
          ...prevState,
          image: imageUrl,
        }));
      } catch (error) {
        console.error("Error al cargar la imagen a Cloudinary:", error);
      }
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("#99d8a561;")}
      //rounded={"lg"}
      bgGradient="linear(#cee2d25d)"
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"} fontWeight="bold">
            Añadir Libro
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Para que los lectores disfruten un buen libro ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={"#559c615c"}
          px={4}
          py={10}
          boxShadow={"lg"}
          maxW={"xl"}
          w={"full"}
        >
          <Stack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)}>
            <HStack>
              <Box>
                <FormControl isInvalid={errors.title}>
                  <FormLabel>Título</FormLabel>
                  <Input
                    type="text"
                    name="title"
                    {...register("title", {
                      required: "El titulo es obligatorio",
                      maxLength: {
                        value: 30,
                        message:
                          "El título del libro debe tener máximo 30 caracteres",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.title && errors.title.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <Box>
                <FormControl isInvalid={errors.authors}>
                  <FormLabel>Autor</FormLabel>
                  <Input
                    type="text"
                    name="authors"
                    {...register("authors", {
                      required: "El autor es obligatorio",
                      maxLength: {
                        value: 50,
                        message:
                          "El autor del libro debe tener máximo 50 caracteres",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.authors && errors.authors.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <FormControl isInvalid={errors.image}>
                  <FormLabel>Imagen</FormLabel>
                  <Box display="flex" alignItems="center">
                    <Button
                      as="label"
                      htmlFor="image"
                      height="40px"
                      width="215px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      border="1px"
                      borderColor="gray.300"
                      borderRadius="md"
                      _hover={{ borderColor: "gray.400" }}
                      _active={{ borderColor: "gray.500" }}
                      _focus={{ boxShadow: "outline" }}
                    >
                      <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        {...register("image", {
                          required: "La imagen es obligatoria",
                          onChange: handleImageSelect
                        })}
                        style={{ display: "none" }} />
                      Seleccione una imagen
                    </Button>
                  </Box>
                  <FormErrorMessage>
                    {errors.image && errors.image.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <Box>
                <FormControl isInvalid={errors.language}>
                  <FormLabel>Idioma</FormLabel>
                  <Input
                    type="text"
                    name="language"
                    {...register("language", {
                      required: "El lenguaje es obligatorio",
                      maxLength: {
                        value: 2,
                        message:
                          "El idioma del libro debe tener máximo 2 caracteres",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.language && errors.language.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <FormControl isInvalid={errors.publisher}>
                  <FormLabel>Editorial</FormLabel>
                  <Input
                    type="text"
                    name="publisher"
                    {...register("publisher", {
                      required: "La editorial es obligatoria",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.publisher && errors.publisher.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <Box>
                <FormControl isInvalid={errors.datePublication}>
                  <FormLabel>Fecha de publicación</FormLabel>
                  <Input
                    type="date"
                    name="datePublication"
                    {...register("datePublication", {
                      required: "La fecha de publicación es obligatoria",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.datePublication && errors.datePublication.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <FormControl isInvalid={errors.category}>
                <FormLabel>Categoría</FormLabel>
                <Input
                  type="text"
                  name="category"
                  {...register("category", {
                    required: "La categoría es obligatoria",
                  })}
                />
                <FormErrorMessage>
                  {errors.category && errors.category.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.price}>
                <FormLabel>Precio</FormLabel>
                <Input
                  type="number"
                  name="price"
                  {...register("price", {
                    required: "El precio es obligatorio",
                    valueAsNumber: true,
                    min: {
                      value: 0,
                      message: "El precio debe ser mayor o igual a 0",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.price && errors.price.message}
                </FormErrorMessage>
              </FormControl>
            </HStack>
            <HStack>
              <FormControl isInvalid={errors.numberPages}>
                <FormLabel>Número de páginas</FormLabel>
                <Input
                  type="number"
                  name="numberPages"
                  {...register("numberPages", {
                    required: "El número de páginas es obligatorio",
                    valueAsNumber: true,
                    min: {
                      value: 1,
                      message:
                        "El número de páginas debe ser mayor o igual a 1",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.numberPages && errors.numberPages.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.isbn}>
                <FormLabel>ISBN</FormLabel>
                <Input
                  type="number"
                  name="isbn"
                  {...register("isbn", {
                    required: "El número de isbn es obligatorio",
                    minLength: {
                      value: 10,
                      message:
                        "El número de isbn debe tener un minimo de 10 caracteres",
                    },
                    maxLength: {
                      value: 20,
                      message:
                        "El número de isbn debe tener un maximo de 20 caracteres",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.isbn && errors.isbn.message}
                </FormErrorMessage>
              </FormControl>
            </HStack>
            <FormControl isInvalid={errors.description}>
              <FormLabel>Descripción</FormLabel>
              <Textarea
                name="description"
                {...register("description", {
                  required: "La descripción es obligatoria",
                  maxLength: {
                    value: 500,
                    message:
                      "La descripción del libro debe tener máximo 500 caracteres",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.description && errors.description.message}
              </FormErrorMessage>
            </FormControl>
            <Stack spacing={10}>
              <Button
                type="submit"
                bg={"green.400"}
                color={"white"}
                _hover={{
                  bg: "green.600",
                }}
              >
                Añadir Libro
              </Button>
              {successMessage && (
                <Alert status="success">
                  <AlertIcon />
                  {successMessage}
                </Alert>
              )}
              {errorMessage && (
                <Alert status="error">
                  <AlertIcon />
                  {errorMessage}
                </Alert>
              )}
              <Link to={"/"} textDecoration="none">
                <Stack spacing={10}>
                  <Button
                    bg={"green.400"}
                    color={"white"}
                    _hover={{
                      bg: "green.600",
                    }}
                  >
                    Cancelar
                  </Button>
                </Stack>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
