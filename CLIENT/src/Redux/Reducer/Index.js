import {
  GET_ALL_BOOKS,
  GET_DETAIL_BOOKS,
  FILTER_BY_PRICE,
  FILTER_BY_AUTOR,
  SEARCH_NAME_BOOK,
  FILTER_RESULTS,
  CREATE_BOOK,
  ORDER_PRICE,
} from "../Action/Actions.types.js";

const initialState = {
  allBooks: [],
  detailBooks: [],
  isLoading: false,
  search: null,
  category: [],
  filtered: null,
  filters: {
    category: "",
    price: "",
  },
};

const filterResultsByCriteria = (filters, resultsToFilter) => {
  let filterResults = resultsToFilter;
  if (filters.category) {
    filterResults = filterResults.filter((book) => {
      return book.Categories.some((category) =>
        category.name.includes(filters.category)
      );
    });
  }
  if (filters.price) {
    filterResults = filterResults.filter((book) => {
      const price = parseFloat(book.price);

      if (filters.price === "lt100") {
        return price <= 100;
      } else if (filters.price === "101-200") {
        return price >= 101 && price <= 200;
      } else if (filters.price === "201-300") {
        return price >= 201 && price <= 300;
      } else if (filters.price === "gt300") {
        return price > 300;
      }

      return true; // Si no se especifica un valor de filtro válido, se devuelven todos los libros.
    });
  };
  return filterResults;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS:
      // console.log(action.payload);
      return {
        ...state,
        allBooks: action.payload,
        // filtered: action.payload,
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
        filtered: filterResultsByCriteria(state.filters, action.payload),
      };

    case FILTER_RESULTS:
      console.log(action.payload);
      state.filters = action.payload;
      if (state.search) {
        return {
          ...state,
          filtered: filterResultsByCriteria(action.payload, state.search),
        }
      }
      return {
        ...state,
        filtered: filterResultsByCriteria(action.payload, state.allBooks),
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
        allBooks: [...state.allBooks, action.payload],
      }

  case ORDER_PRICE: {
  let filterOrder = [];
  state.filtered
    ? (filterOrder = [...state.filtered])
    : state.search
      ? (filterOrder = [...state.search])
      : (filterOrder = [...state.allBooks]);

  filterOrder.sort((bookA, bookB) => {
    const priceA = parseFloat(bookA.price);
    const priceB = parseFloat(bookB.price);

    if (priceA > priceB) {
      return action.payload === "asc" ? 1 : -1;
    } else if (priceA < priceB) {
      return action.payload === "desc" ? 1 : -1;
    } else {
      return 0;
    }
  });
  return { ...state, filtered: filterOrder };
}
    default:
return { ...state };
  };
};

export default reducer;
