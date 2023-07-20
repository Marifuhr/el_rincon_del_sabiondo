import { Box, Heading } from "@chakra-ui/react";
import ListBooksAdmin from "./ListBooksAdmin";
import PaginatorBooksAdmin from "./PaginatorBooksAdmin";
import SearchBarAdminBook from "./SearchBarAdminBook";


const AdminBooks = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Heading textAlign="center" fontSize={30}>Administrador de Libros</Heading>
            <SearchBarAdminBook />
            <PaginatorBooksAdmin />
            <ListBooksAdmin />
        </Box>
    )
}

export default AdminBooks