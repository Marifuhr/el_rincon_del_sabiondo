import {
    GET_ALL_BOOKS,
    GET_DETAIL_BOOKS,
    FILTER_BY_CATEGORY,
    FILTER_BY_PRICE,
    FILTER_BY_AUTOR,
    SEARCH_NAME_BOOK
} from './Actions.types';
import axios from 'axios';

const endpoint = 'http://localhost:3001';

export const getAllBooks = () => {
    return async function (dispatch) {
        try {
            const json = await axios.get(`${endpoint}/books`)
            return dispatch({
                type: GET_ALL_BOOKS,
                payload: json
        })
        } catch (error) {
            
        }
    }
}