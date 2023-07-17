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
        booksPageCurrent:[]
    }
    //? Reducer
    const reducerBooksAdmin = function(state, {action,payload}){
        const actionType = {
            [`${ADD_BOOKS_ALL}`]:() => {
                return {
                    ...state,
                    booksDB: payload,
                    booksPageCurrent: payload.slice(0,10)
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