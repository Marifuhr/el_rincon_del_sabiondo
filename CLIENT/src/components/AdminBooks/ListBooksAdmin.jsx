import { Box, Button, Heading } from "@chakra-ui/react";
import { clearFilter, updatedBook, useBooksAdmin } from "../../context/ProviderBooksAdmin"
import CardBookAdmin from "./CardBookAdmin";
import axios from "axios";

const ListBooksAdmin = () => {
    const [{ currentPageBooks }, dispatch] = useBooksAdmin();

    const editBook = async (IdBook, { image, title, price, publisher, numberPages, stock, description }) => {
        const objValues = { image, title, price, publisher, numberPages, stock, description };

        const finalLastValues = Object.fromEntries(Object.entries(objValues).filter(([,v]) => v?.toString()));
        const response = await axios.put(`${import.meta.env.VITE_URL_ENDPOINT}/books/${IdBook}`, finalLastValues);
        return response.data;
    }
    const updatedSuccesfullBook = book => {
        dispatch(updatedBook(book));
    };

    const switchActiveBook = async (state, IdBook) => {
        const dataToUpdate = {
            isActive: state
        }
        const response = await axios.put(`${import.meta.env.VITE_URL_ENDPOINT}/books/${IdBook}`, dataToUpdate);
        return response.data;
    };

    return (
        <Box display={{base: "flex", xl:"grid"}} gridTemplateColumns="repeat(auto-fill, minmax(500px, 1fr ))" alignItems="stretch" gap={2} flexDirection="column">
            {
                currentPageBooks?.length ? currentPageBooks.map((book) => (
                    <CardBookAdmin
                        updatedSuccesfullBook={updatedSuccesfullBook}
                        editBook={editBook}
                        {...book}
                        switchActiveBook={switchActiveBook}
                        key={book.IdBook}
                    />
                )) : (<Box p={4} textAlign="center">
                        <Heading fontSize={30}>No hay libros con tu busqueda</Heading>
                        <Button colorScheme="red" onClick={() => dispatch(clearFilter())}>Limpiar Busqueda</Button>
                    </Box>)
            }
        </Box>
    )
}

export default ListBooksAdmin