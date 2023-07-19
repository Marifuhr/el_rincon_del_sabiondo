import { Box, Image, Heading, Text, Button, Input, Textarea, Alert, AlertIcon, AlertTitle, CloseButton } from "@chakra-ui/react"
import { useRef, useState } from "react";
import { Link } from 'react-router-dom';

const TIMEOUT_ALERT = 3000;
const styleSpan = {
  fontWeight: "bold",
  textDecoration: "none"
};

const CardBookAdmin = (bookProps) => {
  const { editBook, updatedSuccesfullBook, image, title, IdBook, languageBook: { language }, price, publisher, numberPages, stock, isActive, description } = bookProps;

  const [disabled, setDisabled] = useState(isActive);
  const [editMode, setEditMode] = useState(false);
  const [valuesBook, setValuesBook] = useState({ image, title, price, publisher, numberPages, stock, description });
  const [message, setMessage] = useState({active: false, message:null, type:null});
  const refUpdateBook = useRef(false);

  const handleActiveBook = () => {
    setDisabled(state => !state);
  };
  
  const handleEditMode = () => {
    setEditMode(state => !state);
    setMessage({active:false, message:null, type:null});
  };

  const handleChangeValuesBook = ({ target: { value, name } }) => {
    //If the fields have been modified.
    if(!refUpdateBook.current){
      refUpdateBook.current = true;
    }

    setValuesBook(state => ({
      ...state,
      [name]: value
    }))
  };

  const handleSubmit = async e => {
    e.preventDefault();
    
    //If the values was edited, execute request
    if(refUpdateBook.current){
      //Send only changed values
      const finalValuesToUpdate = Object.fromEntries(Object.entries(valuesBook).filter(([k,v]) => (
        v !== bookProps[k]
      )));

      //Validate if exist values to Update
      if(Object.values(finalValuesToUpdate).length === 0){
        handleEditMode();
        return;
      }

      // Send action to update Values
      const book = await editBook(IdBook, finalValuesToUpdate);
      
      // If exist one error with the update of Book
      if(book.error){
        setMessage({active:true, message:book.error, type:'error'});
        return;
      }
      
      //If the updated Book was succesfull
      updatedSuccesfullBook(book);
      
      //Display message in template
      setMessage({active:true, message:'Los datos del libros han sido Editados exitosamente', type:'success'});
      
      //After ones seconds,close editMode
      setTimeout(() => {
        handleEditMode();
      },TIMEOUT_ALERT);
      return;
    }

    handleEditMode();
  };

  return (
    <Box display={{base:'block', sm:"flex"}} gap={4} bg="#f0f0f0" borderRadius={5} overflow="hidden">
      <Box>
        <Image src={image} minW="130px" w="100%" h="100%" objectFit="cover" maxH={{ base: "150px", sm: "100%" }} boxShadow="0 1px 15px rgba(0,0,0,0.2)" />
      </Box>
      <Box display="flex" flexDirection="column" p={2}>
        <form onSubmit={handleSubmit}>
          <Box borderBottom="2px solid #cacaca">
            {
              editMode ?
                <Input placeholder="Titulo" my={1} pr={4} name="title" onChange={handleChangeValuesBook} value={valuesBook.title} />
                : <Link to={`detail/${IdBook}`} replace={true}><Heading p={2} fontSize={20}>{title}</Heading></Link>
            }
            <Text fontSize={10} decoration="underline" m={0}><span style={styleSpan}>Id Book: </span> {IdBook}</Text>
          </Box>
          {
            editMode ?
              <>
                <Heading pt={2} fontSize={20} textAlign="center">Modificando Libro</Heading>
                <Box display="flex" gap={1} flexDirection="column" fontSize={15} borderBottom="2px solid gray" pb={2}>
                  <Textarea fontSize={10} resize="none" name="description" onChange={handleChangeValuesBook} value={valuesBook.description}/>
                  <Input placeholder="Editorial" name="publisher" onChange={handleChangeValuesBook} value={valuesBook.publisher} />
                  <Box display="flex" gap={2}>
                    <Input p={2} type="number" placeholder="precio" name="price" onChange={handleChangeValuesBook} value={valuesBook.price} />
                    <Input p={2} type="number" placeholder="stock" name="stock" onChange={handleChangeValuesBook} value={valuesBook.stock} />
                    <Input p={2} type="number" placeholder="Número de Páginas" name="numberPages" onChange={handleChangeValuesBook} value={valuesBook.numberPages} />
                  </Box>
                  {
                    message.active && (
                      <Alert status={message.type}>
                        <AlertIcon />
                        <AlertTitle>{message.message}</AlertTitle>
                        <CloseButton
                          position="absolute"
                          right="8px"
                          top="8px"
                          onClick={() => setMessage(state => ({...state, active:false}))}
                        />
                      </Alert>
                    )
                  }
                  <Button w="min-content" colorScheme="blue" type="submit">Actualizar</Button>
                </Box>
              </>
              :
              <>
                <Text fontSize={10} pt={2} noOfLines={3}>{description}</Text>
                <Box display="grid" fontSize={15} gridTemplateColumns="1fr 1fr">
                  <Text p={1} decoration="underline" m={0}><span style={styleSpan}>Idioma: </span>{language}</Text>
                  <Text p={1} decoration="underline" m={0}><span style={styleSpan}>Precio: </span>${price}</Text>
                  <Text p={1} decoration="underline" m={0}><span style={styleSpan}>Stock: </span>{stock}</Text>
                  <Text p={1} decoration="underline" m={0}><span style={styleSpan}>Editorial: </span>{publisher}</Text>
                  <Text p={1} decoration="underline" m={0}><span style={styleSpan}>Páginas: </span>{numberPages}</Text>
                </Box>
              </>
          }
          <Box py={2} display="flex" gap={1}>
            <Button m={0} w="min-content" onClick={handleEditMode} colorScheme={editMode ? "red" : "twitter"}>{editMode ? "Cancelar" : "Editar"}</Button>
            <Button m={0} onClick={handleActiveBook} colorScheme={disabled ? "yellow" : "linkedin"}>{disabled ? "Deshabilitar" : "Habilitar" }</Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default CardBookAdmin