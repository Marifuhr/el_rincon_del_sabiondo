import {
  GET_ALL_BOOKS,
  GET_DETAIL_BOOKS,
  SEARCH_NAME_BOOK,
  FILTER_RESULTS,
  CREATE_BOOK,
  ORDER_PRICE,
  TOKEN_STORAGE_CART,
  ADD_BOOK_SHOPPING_CART,
  REMOVE_BOOK_SHOPPING_CART,
  CLEAR_SHOPPING_CART,
  CREATE_USER,
  SEND_MAIL,
} from "../Action/Actions.types.js";
import { addShoopingCartStorage } from "../Action/Index.js";

const initialState = {
  profile: {
    name: "",
    email: "",
    password: "",
  },
  users: [],
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
  cart_shopping: JSON.parse(localStorage.getItem(TOKEN_STORAGE_CART)) || [],
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
  }
  return filterResults;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS:
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
      state.filters = action.payload;
      if (state.search) {
        return {
          ...state,
          filtered: filterResultsByCriteria(action.payload, state.search),
        };
      }
      return {
        ...state,
        filtered: filterResultsByCriteria(action.payload, state.allBooks),
      };
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
      };

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
    case ADD_BOOK_SHOPPING_CART: {
      const bookPayload = action.payload;
      const validateIfExistBook = state.cart_shopping.some(
        ({ IdBook }) => IdBook === bookPayload.IdBook
      );

      if (validateIfExistBook) {
        const mapedBooks = state.cart_shopping.map((book) => {
          const finalBook = book;
          if (book.IdBook === bookPayload.IdBook) {
            finalBook.quantity += 1;
          }
          return book;
        });

        addShoopingCartStorage(mapedBooks);

        return {
          ...state,
          cart_shopping: mapedBooks,
        };
      }

      const parsedBook = {
        IdBook: bookPayload.IdBook,
        title: bookPayload.title,
        description: bookPayload.description.slice(0, 255),
        picture_url: bookPayload.image,
        unit_price: Number(bookPayload.price),
        quantity: 1,
      };
      
      const cart_shopping = [...state.cart_shopping, parsedBook];
      addShoopingCartStorage(cart_shopping);
      
      return {
        ...state,
        cart_shopping,
      };
    }
    case REMOVE_BOOK_SHOPPING_CART: {
      const IdBookToRemove = action.payload;
      const lastCart = state.cart_shopping.filter(
        ({ IdBook }) => IdBook !== IdBookToRemove
      );
      addShoopingCartStorage(lastCart);

      return {
        ...state,
        cart_shopping: lastCart,
      };
    }
    
    case CLEAR_SHOPPING_CART: {
      addShoopingCartStorage([]);
      return { ...state, cart_shopping: [] };
    }


    case SEND_MAIL:
      return {
        ...state,
        infoSend: action.payload,
      };
    default:
      return { ...state };
  }
};
const createUser = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
