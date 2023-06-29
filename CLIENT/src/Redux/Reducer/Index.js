import {
  GET_ALL_BOOKS,
  GET_DETAIL_BOOKS,
  FILTER_BY_CATEGORY,
  FILTER_BY_PRICE,
  FILTER_BY_AUTOR,
  SEARCH_NAME_BOOK,
  CREATE_BOOK,
} from "../Action/Actions.types.js";

const initialState = {
  allBooks: [],
  detailBooks: [],
  isLoading: false,
  search: [],
  category: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS:
      // console.log(action.payload);
      return {
        ...state,
        allBooks: action.payload,
        isLoading: false,
      };
    case GET_DETAIL_BOOKS:
      return {
        ...state,
        detailBooks: action.payload,
      };
    case SEARCH_NAME_BOOK:
      return {
        ...state,
        search: action.payload,
      };

    // case FILTER_BY_CATEGORY:
    //   return {
    //     ...state,
    //     category: action.payload,
    //   };
    case FILTER_BY_CATEGORY:
      const category = action.payload.category;
      const filteredBooks = action.payload.books;
      return {
        ...state,
        category: category,
        allBooks: filteredBooks,
      };

    case FILTER_BY_PRICE:
      return {};
    case FILTER_BY_AUTOR:
      return {};

    case "RESET":
      return initialState;
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "ERROR":
      return {
        ...state,
        isLoading: false,
      };
    case CREATE_BOOK:
      return {
        ...state,
        allBooks:[...state.allBooks, action.payload],
      }
    default:
      return { ...state };
  }
};

export default reducer;
