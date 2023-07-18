import { Box } from "@chakra-ui/react";
import { useBooksAdmin } from "../../context/ProviderBooksAdmin"
import CardBookAdmin from "./CardBookAdmin";

const ListBooksAdmin = () => {
    const { currentPageBooks } = useBooksAdmin()[0];

    return (
        <Box display={{base: "flex", xl:"grid"}} gridTemplateColumns="repeat(auto-fill, minmax(500px, 1fr ))" alignItems="stretch" gap={2} flexDirection="column">
            {
                Boolean(currentPageBooks.length) && currentPageBooks.map((book) => (
                    <CardBookAdmin {...book} key={book.IdBook} />
                ))
            }
        </Box>
    )
}

export default ListBooksAdmin