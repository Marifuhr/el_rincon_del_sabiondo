import { Box, Image, Heading, Text, Button, Input } from "@chakra-ui/react"
import { useState } from "react";
import { Link } from 'react-router-dom';

const styleSpan = {
  fontWeight: "bold",
  textDecoration: "none"
}

const CardBookAdmin = (props) => {
  console.log(props);
  const { image, title, IdBook, languageBook: { language }, price, publisher, numberPages, stock, isActive, description } = props;
  const [disabled, setDisabled] = useState(isActive);
  const [editMode, setEditMode] = useState(true);
  const [valuesBook, setValuesBook] = useState({image, title, price, publisher, numberPages, stock, description});

  const handleActiveBook = () => {
    setDisabled(state => !state);
  };
  const handleEditMode = () => {
    setEditMode(state => !state);
  };
  const handleValuesBook = ({target:{value,name}}) => {
    setValuesBook(state => ({
      ...state,
      [name]:[value]
    }))
  }

  return (
    <Box display="flex" gap={4} bg="#f0f0f0" borderRadius={5} overflow="hidden">
      <Box>
        <Image src={image} minW="130px" h="100%" objectFit="cover" maxH={{ base: "150px", md: "100%" }} boxShadow="0 1px 15px rgba(0,0,0,0.2)" />
      </Box>
      <Box display="flex" flexDirection="column" py={2}>
        <Box flexGrow={1} borderBottom="2px solid #cacaca">
          <Link to={`detail/${IdBook}`} replace={true}><Heading fontSize={20}>{title}</Heading></Link>
          <Text fontSize={10} decoration="underline" m={0}><span style={styleSpan}>Id Book: </span> {IdBook}</Text>
        </Box>
        <Text fontSize={10} pt={2} noOfLines={3}>{description}</Text>
        {
          editMode ?
            <>
              <Heading fontSize={20} textAlign="center">Modificando Libro</Heading>
              <Box pr={4} display="flex" gap={1} flexDirection="column" fontSize={15}>
                <Input placeholder="Titulo" p={2} name="title" onChange={handleValuesBook} value={valuesBook.title}/>
                <Input placeholder="Editorial" p={2} name="publisher" onChange={handleValuesBook} value={valuesBook.publisher}/>
                <Box display="flex" gap={2}>
                  <Input p={2} type="number" placeholder="precio" name="price" onChange={handleValuesBook} value={valuesBook.price}/>
                  <Input p={2} type="number" placeholder="stock" name="stock" onChange={handleValuesBook} value={valuesBook.stock}/>
                  <Input p={2} type="number" placeholder="Número de Páginas" name="numberPages" onChange={handleValuesBook} value={valuesBook.numberPages}/>
                </Box>
              </Box>
            </>
          :
            <>
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
          <Button m={0} w="min-content" onClick={handleEditMode} colorScheme={editMode ? "red": "twitter"}>{editMode ? "Cancelar": "Editar"}</Button>
          <Button m={0} onClick={handleActiveBook} colorScheme={disabled ? "linkedin" : "red"}>{disabled ? "Habilitar": "Deshabilitar"}</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default CardBookAdmin