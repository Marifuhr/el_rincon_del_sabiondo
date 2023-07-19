import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

//! Context and Hook Context
const contextBooksAdmin = createContext();
export const useBooksAdmin = () => {
    return useContext(contextBooksAdmin);
};

export const switchEnabledBook = async (state, IdBook) => {
    try{
        console.log('Habilitando / deshabilitando');
    }catch({message}){
        console.log({error:message});
    }
}

//? Data to Reducer
    //? Action Types
    const ADD_BOOKS_ALL = 'ADD_BOOKS_ALL';
    const CHANGE_PAGE = "CHANGE_PAGE";
    const UPDATE_BOOK = "UPDATE_BOOK";

    //? Create Actions
    const addBooks = books => ({
        action: ADD_BOOKS_ALL,
        payload: books
    });
    
    export const changePage = page => ({
        action: CHANGE_PAGE,
        payload: page
    });
    
    export const updatedBook = book => ({
        action: UPDATE_BOOK,
        payload: book
    });

    //? Valores Iniciales
    const initialValues = {
        booksDB:[],
        booksPages:[],
        filteredBooks:[],
        currentPage: 0,
        currentPageBooks:[],
        numberPerPages: 10,
        nPaginator: 0,
    }

    //? Reducer
    const reducerBooksAdmin = function(state, {action,payload}){
        const actionType = {
            [`${ADD_BOOKS_ALL}`]:() => {
                const splitBooks = splitArrays(state.numberPerPages,payload);
                return {
                    ...state,
                    booksDB: payload,
                    booksPages: splitBooks,
                    nPaginator: splitBooks.length,
                    currentPageBooks: splitBooks[state.currentPage],
                    filteredBooks:payload,
                }
            },
            [`${CHANGE_PAGE}`]: () => {
                return {
                    ...state,
                    currentPage: payload,
                    currentPageBooks: state.booksPages[payload]
                }
            },
            [`${UPDATE_BOOK}`]: () => {
                const newCurrentPageBooks = modifiedBookArray(payload, state.currentPageBooks);
                const newBooksDB = modifiedBookArray(payload, state.booksDB);
                const newSplitBooks = splitArrays(state.numberPerPages,newBooksDB);
                return {
                    ...state,
                    currentPageBooks: newCurrentPageBooks,
                    booksDB: newBooksDB,
                    booksPages: newSplitBooks
                }
            }
        };
        return actionType[action] ? actionType[action]() : state
    };

const ProviderBooksAdmin = ({children}) => {
    const [ values, dispatch ] = useReducer(reducerBooksAdmin, initialValues);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_URL_ENDPOINT}/books`).then(data => {
            dispatch(addBooks(data.data.books));
        });
    },[]);

    return (
        <contextBooksAdmin.Provider value={[values, dispatch]}>
            {
                children
            }
        </contextBooksAdmin.Provider>
    )
}

export default ProviderBooksAdmin

const splitArrays = (numberSplit, array) => {
    const limitFor = Math.ceil(array.length / numberSplit);
    let arraySplit = [];

    for(let i = 1; i < limitFor; i++){
        const rightSideArray = i * numberSplit;
        const leftSideArray = rightSideArray - numberSplit;
        arraySplit.push(array.slice(leftSideArray, rightSideArray));
    }

    return arraySplit;
}

const modifiedBookArray = (bookModified, array) => {
    return array.map((book) => {
        if(book.IdBook === bookModified.IdBook){
            return {...book, ...bookModified};
        }
        return book;
    });
};