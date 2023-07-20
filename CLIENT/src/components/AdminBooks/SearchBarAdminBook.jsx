import { Input } from "@chakra-ui/react"
import { filterBooks, useBooksAdmin } from "../../context/ProviderBooksAdmin";

const SearchBarAdminBook = () => {
    const [values,dispatch] = useBooksAdmin();

    const handleSearch = ({target:{value}}) => {
        dispatch(filterBooks({title: value}))
    };

    return (
        <Input
            type="text"
            placeholder="Busca por nombre"
            bg="white"
            mx="auto"
            maxW="400px"
            value={values.dataToFilterBooks.title}
            onChange={handleSearch}
        />
    )
}

export default SearchBarAdminBook