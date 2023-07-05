import { FaCartPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { addBookCart } from '../../Redux/Action/Index';
import { Button } from '@chakra-ui/react';

const ButtonAddBookCart = ({attributesStyles, book}) => {
    const dispatch = useDispatch();

    const handleAddCartBook = e => {
        e.stopPropagation();
        e.preventDefault();

        if(book){
            dispatch(addBookCart(book));
        }
    };
    return (
        <Button {...attributesStyles} boxShadow="0 1px 10px rgba(0,0,0,0.3)" onClick={handleAddCartBook}>
            <FaCartPlus />
        </Button>
    )
}

export default ButtonAddBookCart