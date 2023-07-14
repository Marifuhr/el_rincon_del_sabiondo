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

const CreateReview = () => {
  const { isAuthenticated } = useAuth0();
  const [description, setDescription] = useState("");
  const [bookId, setBookId] = useState("");
  const [rate, setRate] = useState(0);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { user } = useUserInfo();
  const { id } = useParams();

  const handleCreateReview = async () => {
    try {
      const reviewData = {
        description,
        rate,
        IdUser: user.IdUser,
        IdBook: id,
      };
      const response = await axios.post(`${endpoint}/reviews`, reviewData);

      if (response.status === 200) {
        setSuccessMessage("Review Creada");
        console.log(response.data);
        // Limpiar los campos después de la respuesta exitosa
        setDescription("");
        setBookId("");
        setRate(0);
      } else {
        // Manejar la respuesta de error
      }
    } catch (error) {
      // Manejar errores de solicitud
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
      <FormControl isInvalid={!!error} mb={4}>
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
      <FormControl isInvalid={!!error} mb={4}>
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
      <FormControl mb={4}>
        <FormLabel>ID del libro (UUID4)</FormLabel>
        <Input
          placeholder="ID del libro"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
        />
      </FormControl>
      <Button onClick={handleCreateReview}>Crear reseña</Button>
    </Box>
  );
};

export default CreateReview;
