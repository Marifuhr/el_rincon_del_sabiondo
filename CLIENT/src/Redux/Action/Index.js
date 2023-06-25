import axios from "axios";
import {
  GET_ALL_BOOKS,
  //   GET_DETAIL_BOOKS,
  //   FILTER_BY_CATEGORY,
  //   FILTER_BY_PRICE,
  //   FILTER_BY_AUTOR,
  //   SEARCH_NAME_BOOK,
} from "./actions.types";

const endpoint = "http://localhost:3001";

export const getAllBooks = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${endpoint}/books`);
      const books = response.data.books;
      console.log(books);
      return dispatch({
        type: GET_ALL_BOOKS,
        payload: books,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
