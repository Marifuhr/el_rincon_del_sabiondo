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
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS:
      console.log(action.payload);
      return {
        ...state,
        allBooks: action.payload,
        isLoading: false,
      };
    case GET_DETAIL_BOOKS:
      return state;
    case FILTER_BY_CATEGORY:
      return {};

    default:
      return { ...state };
  }
};

export default reducer;
