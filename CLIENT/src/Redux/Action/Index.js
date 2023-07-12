import axios from "axios";
import {
  GET_ALL_BOOKS,
  GET_DETAIL_BOOKS,
  SEARCH_NAME_BOOK,
  FILTER_BY_CATEGORY,
  FILTER_RESULTS,
  ORDER_PRICE,
  CREATE_BOOK,
  TOKEN_STORAGE_CART,
  ADD_BOOK_SHOPPING_CART,
  REMOVE_BOOK_SHOPPING_CART,
  CLEAR_SHOPPING_CART,
  CREATE_USER,
  SEND_MAIL,
} from "./Actions.types.js";

const endpoint = import.meta.env.VITE_URL_ENDPOINT;

export const getAllBooks = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${endpoint}/books`);
      const books = response.data.books;
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
      return dispatch({
        type: SEARCH_NAME_BOOK,
        payload: books,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filterByCategory = (category) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `${endpoint}/books?category=${category}`
      );
      const books = response.data.books;
      return dispatch({
        type: FILTER_BY_CATEGORY,
        payload: { category: category, books: books },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export function filterResults(filters) {
  return {
    type: FILTER_RESULTS,
    payload: filters,
  };
}

export const createBook = (book) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${endpoint}/books`, book);
      const newBook = response.data;
      return dispatch({
        type: CREATE_BOOK,
        payload: newBook,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export function orderPrice(order) {
  return {
    type: ORDER_PRICE,
    payload: order,
  };
}

export function addBookCart(book) {
  return {
    type: ADD_BOOK_SHOPPING_CART,
    payload: book,
  };
}

export function remoteBookCart(Id) {
  return {
    type: REMOVE_BOOK_SHOPPING_CART,
    payload: Id,
  };
}

export function clearShoppingCart() {
  return {
    type: CLEAR_SHOPPING_CART,
  };
}

export function addShoopingCartStorage(cart) {
  localStorage.setItem(TOKEN_STORAGE_CART, JSON.stringify(cart));
}

export function clearStorageCart() {
  localStorage.removeItem(TOKEN_STORAGE_CART);
}

export function createUser(userData) {
  return {
    type: CREATE_USER,
    payload: userData,
  };
}

export const sendMail = (data) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${endpoint}/mail`, data);
      const infoSend = response.data;
      return dispatch({
        type: SEND_MAIL,
        payload: infoSend,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};


// actions.js

export function saveProfileChanges(profileData){
  return {
    type: SAVE_PROFILE_CHANGES,
    payload: profileData,
  };
};
