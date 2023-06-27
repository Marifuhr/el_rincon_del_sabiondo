import axios from "axios";
import {
  GET_ALL_BOOKS,
  GET_DETAIL_BOOKS,
  SEARCH_NAME_BOOK,
  CREATE_BOOK,
  //   FILTER_BY_CATEGORY,
  //   FILTER_BY_PRICE,
  //   FILTER_BY_AUTOR,
} from "./Actions.types.js";

const endpoint = "http://localhost:3001";

export const getAllBooks = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${endpoint}/books`);
      const books = response.data.books;
      // console.log(books);
      return dispatch({
        type: GET_ALL_BOOKS,
        payload: books,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getDetailBooks = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${endpoint}/books/${id}`);
      const books = response.data.finded;
      //console.log('ingreso a getdetailbook')
      //console.log(books.Authors)
      return dispatch({
        type: GET_DETAIL_BOOKS,
        payload: books,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const searchNameBooks = (title) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${endpoint}/books?title=${title}`);
      const books = response.data.books;
      console.log(books);
      return dispatch({
        type: SEARCH_NAME_BOOK,
        payload: books,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export const createBook = (book) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${endpoint}/books`, book);
      const books = response.data;
      console.log(books);
      return dispatch({
        type: CREATE_BOOK,
        payload: books,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}