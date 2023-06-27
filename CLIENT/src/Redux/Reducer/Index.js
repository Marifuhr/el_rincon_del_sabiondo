import {
  GET_ALL_BOOKS,
  GET_DETAIL_BOOKS,
  FILTER_BY_CATEGORY,
  FILTER_BY_PRICE,
  FILTER_BY_AUTOR,
  SEARCH_NAME_BOOK,
  FILTER_RESULTS,
} from "../Action/Actions.types.js";

const initialState = {
  allBooks: [],
  detailBooks: [],
  Loading: false,
  search: [],
  filtered: [],
  filters: {
    category: [],
    name: [],
    language: [],
  },
};

const filterResultsByCriteria = (filters, resultsToFilter) => {
  let filterResults = resultsToFilter;
  if (filters.category) {
    filterResults = filterResults.filter((book) => {
      const cat = book.category.map((cat) => cat.name);
      // console.log("this category", filters.category);
      // console.log({ cat });
      return !!cat.filter((nameCat) =>
        nameCat.toLowerCase().includes(filters.category.toLowerCase())
      ).length;
    });
  }
  if (filters.name) {
    filterResults = filterResults.filter((book) =>
      book.title.toLowerCase().includes(filters.name.toLowerCase())
    );
  }
  if (filters.language) {
    filterResults = filterResults.filter((book) =>
      book.language.toLowerCase().includes(filters.language.toLowerCase())
    );
  }
  return filterResults;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS:
      // console.log(action.payload);
      return {
        ...state,
        allBooks: action.payload,
        filtered: action.payload,
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
    case FILTER_RESULTS:
      return {
        ...state,
        filtered: filterResultsByCriteria(action.payload, state.allBooks),
      };

    case FILTER_BY_CATEGORY:
      return {};
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
    default:
      return { ...state };
  }
};

export default reducer;
