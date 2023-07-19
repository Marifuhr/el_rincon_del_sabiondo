import { Box } from "@chakra-ui/react";
import { updatedBook, useBooksAdmin } from "../../context/ProviderBooksAdmin"
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
    }

    return (
        <Box display={{base: "flex", xl:"grid"}} gridTemplateColumns="repeat(auto-fill, minmax(500px, 1fr ))" alignItems="stretch" gap={2} flexDirection="column">
            {
                Boolean(currentPageBooks?.length) && currentPageBooks.map((book) => (
                    <CardBookAdmin
                        updatedSuccesfullBook={updatedSuccesfullBook}
                        editBook={editBook}
                        {...book}
                        switchActiveBook={switchActiveBook}
                        key={book.IdBook}
                    />
                ))
            }
        </Box>
    )
}

export default ListBooksAdmin