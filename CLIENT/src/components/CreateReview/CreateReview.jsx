import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import axios from "axios";
const endpoint = import.meta.env.VITE_URL_ENDPOINT;

import { useUserInfo } from "../../context/ProviderUser";
import { useParams } from "react-router-dom";

import { useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';


const CreateReview = () => {
  const { isAuthenticated} = useAuth0();
  const [description, setDescription] = useState('');
  const book = useSelector((state) => state.detailBooks)

  const [rate, setRate] = useState(0);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { user } = useUserInfo();
  const { id } = useParams();

  const handleCreateReview = async () => {
    try {
      if (rate < 1 || rate > 5) {
        setError('La calificación debe estar entre 1 y 5 estrellas');
        return;
      }

      if (description.length < 10 || description.length > 500) {
        setError('La descripción debe tener entre 10 y 500 caracteres');
        return;
      }
      
      const reviewData = {
        description,
        rate,
        IdUser: user.IdUser,
        IdBook: book.IdBook,

      };

      const response = await axios.post(`${endpoint}/reviews`, reviewData);

      if (response.status === 200) {
        setSuccessMessage("Review Creada");
       
        // Limpiar los campos después de la respuesta exitosa
        setDescription('');
        setRate(0);
        navigate(0);

      } else {
        
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRateChange = (value) => {
    setRate(value);
    setError("");
  };

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
    setError("");
  };

  // Verificar si el usuario está autenticado antes de renderizar el componente
  if (!isAuthenticated) {
    return null;
  }

  return (
    <Box mt={4}>
      {successMessage && (
        <Alert status="success" mb={4}>
          <AlertIcon />
          {successMessage}
        </Alert>
      )}
      <FormControl isInvalid={!!error} mb={5} marginTop={20}>
        <FormLabel>Calificación</FormLabel>
        <Box>
          {[1, 2, 3, 4, 5].map((value) => (
            <StarIcon
              key={value}
              boxSize={6}
              color={value <= rate ? "yellow.500" : "gray.300"}
              cursor="pointer"
              onClick={() => handleRateChange(value)}
            />
          ))}
        </Box>
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!error} mb={6}>
        <FormLabel>Descripción</FormLabel>
        <Input
          as="textarea"
          rows={4}
          placeholder="Descripción (entre 10 y 500 caracteres)"
          value={description}
          onChange={handleDescriptionChange}
        />
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
      {/* <FormControl mb={4}>
        <FormLabel>ID del libro (UUID4)</FormLabel>
        <Input
          placeholder="ID del libro"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
        />
      </FormControl> */}
      <Button onClick={handleCreateReview}>Crear reseña</Button>

    </Box>
  );
};

export default CreateReview;
