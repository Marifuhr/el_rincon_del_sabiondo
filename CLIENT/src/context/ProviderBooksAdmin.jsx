import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

//! Context and Hook Context
const contextBooksAdmin = createContext();
export const useBooksAdmin = () => {
    return useContext(contextBooksAdmin);
};

//? Data to Reducer
    //? Action Types
    const ADD_BOOKS_ALL = 'ADD_BOOKS_ALL';
    //? Create Actions
    const addBooks = books => ({
        action: ADD_BOOKS_ALL,
        payload: books
    })
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
            }
        };
        return actionType[action] ? actionType[action]() : state
    };

const ProviderBooksAdmin = ({children}) => {
    const [ values, dispatch ] = useReducer(reducerBooksAdmin, initialValues);

    const endpointBack = import.meta.env.VITE_URL_ENDPOINT;

    useEffect(() => {
        axios.get(`${endpointBack}/books`).then(data => {
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