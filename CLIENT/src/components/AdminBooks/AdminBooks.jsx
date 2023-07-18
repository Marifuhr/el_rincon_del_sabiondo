import { Box, Heading } from "@chakra-ui/react";
import ListBooksAdmin from "./ListBooksAdmin";
import PaginatorBooksAdmin from "./PaginatorBooksAdmin";


const AdminBooks = () => {
    return (
        <Box>
            <Heading textAlign="center" fontSize={30}>Administrador de Libros</Heading>
            <PaginatorBooksAdmin />
            <ListBooksAdmin />
        </Box>
    )
}

export default AdminBooks