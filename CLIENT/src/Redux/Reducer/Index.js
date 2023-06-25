import {
  GET_ALL_BOOKS,
  GET_DETAIL_BOOKS,
  FILTER_BY_CATEGORY,
  FILTER_BY_PRICE,
  FILTER_BY_AUTOR,
  SEARCH_NAME_BOOK,
} from "../Action/actions.types";

const initialState = {
  allBooks: [],
  detailBooks: [],
  isLoading: false,
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
    case FILTER_BY_CATEGORY:
      return {};
    case FILTER_BY_PRICE:
      return {};
    case FILTER_BY_AUTOR:
      return {};
    case SEARCH_NAME_BOOK:
      return {};
    case "RESET":
      return initialState;
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      }
    case "ERROR":
      return {
        ...state,
        isLoading: false,
      }
    default:
      return { ...state };
  }
};

export default reducer;
