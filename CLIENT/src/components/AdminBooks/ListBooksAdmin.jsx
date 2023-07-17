import { useBooksAdmin } from "../../context/ProviderBooksAdmin"
import CardBookAdmin from "./CardBookAdmin";

const ListBooksAdmin = () => {
    const {booksPageCurrent} = useBooksAdmin()[0];

    return (
        <>
            {
                Boolean(booksPageCurrent.length) && booksPageCurrent.map((book) => (
                    <CardBookAdmin {...book} key={book.IdBook}/>
                ))
            }
        </>
    )
}

export default ListBooksAdmin