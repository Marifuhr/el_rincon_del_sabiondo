import { Box, Image, Heading, Text, Button, Input, Textarea } from "@chakra-ui/react"
import { useState } from "react";
import { Link } from 'react-router-dom';

const styleSpan = {
  fontWeight: "bold",
  textDecoration: "none"
}

const CardBookAdmin = ({ image, title, IdBook, languageBook: { language }, price, publisher, numberPages, stock, isActive, description }) => {
  const [disabled, setDisabled] = useState(isActive);
  const [editMode, setEditMode] = useState(false);
  const [valuesBook, setValuesBook] = useState({ image, title, price, publisher, numberPages, stock, description });

  const handleActiveBook = () => {
    setDisabled(state => !state);
  };
  const handleEditMode = () => {
    setEditMode(state => !state);
  };
  const handleValuesBook = ({ target: { value, name } }) => {
    setValuesBook(state => ({
      ...state,
      [name]: [value]
    }))
  }

  return (
    <Box display="flex" gap={4} bg="#f0f0f0" borderRadius={5} overflow="hidden">
      <Box>
        <Image src={image} minW="130px" h="100%" objectFit="cover" maxH={{ base: "150px", md: "100%" }} boxShadow="0 1px 15px rgba(0,0,0,0.2)" />
      </Box>
      <Box display="flex" flexDirection="column" p={2}>
        <form onSubmit={() => {}}>
          <Box borderBottom="2px solid #cacaca">
            {
              editMode ?
                <Input placeholder="Titulo" my={1} pr={4} name="title" onChange={handleValuesBook} value={valuesBook.title} />
                : <Link to={`detail/${IdBook}`} replace={true}><Heading p={2} fontSize={20}>{title}</Heading></Link>
            }
            <Text fontSize={10} decoration="underline" m={0}><span style={styleSpan}>Id Book: </span> {IdBook}</Text>
          </Box>
          {
            editMode ?
              <>
                <Heading pt={2} fontSize={20} textAlign="center">Modificando Libro</Heading>
                <Box display="flex" gap={1} flexDirection="column" fontSize={15} borderBottom="2px solid gray" pb={2}>
                  <Textarea fontSize={10} resize="none" >{valuesBook.description}</Textarea>
                  <Input placeholder="Editorial" name="publisher" onChange={handleValuesBook} value={valuesBook.publisher} />
                  <Box display="flex" gap={2}>
                    <Input p={2} type="number" placeholder="precio" name="price" onChange={handleValuesBook} value={valuesBook.price} />
                    <Input p={2} type="number" placeholder="stock" name="stock" onChange={handleValuesBook} value={valuesBook.stock} />
                    <Input p={2} type="number" placeholder="Número de Páginas" name="numberPages" onChange={handleValuesBook} value={valuesBook.numberPages} />
                  </Box>
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