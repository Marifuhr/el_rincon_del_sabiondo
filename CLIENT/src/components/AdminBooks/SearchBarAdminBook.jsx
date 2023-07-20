import { Input } from "@chakra-ui/react"
import { useState } from "react";
import { filterBooks, useBooksAdmin } from "../../context/ProviderBooksAdmin";

const SearchBarAdminBook = () => {
    const [ searchBarValue, setSearchBarValue ] = useState();
    const [,dispatch] = useBooksAdmin();

    const handleSearch = ({target:{value}}) => {
        dispatch(filterBooks({title: value}))
        setSearchBarValue(value);
    };

    return (
        <Input
            type="text"
            placeholder="Busca por nombre"
            bg="white"
            mx="auto"
            maxW="400px"
            value={searchBarValue}
            onChange={handleSearch}
        />
    )
}

export default SearchBarAdminBook