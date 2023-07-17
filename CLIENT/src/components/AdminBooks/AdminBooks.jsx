import { Box, Heading } from "@chakra-ui/react";
import ListBooksAdmin from "./ListBooksAdmin";


const AdminBooks = () => {
    return (
        <Box>
            <Heading textAlign="center" fontSize={30}>Administrador de Libros</Heading>
            <ListBooksAdmin />
        </Box>
    )
}

export default AdminBooks