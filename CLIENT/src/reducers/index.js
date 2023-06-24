import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      const index = state.findIndex(book => book.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    updateBook: (state, action) => {
      const { id, title, author, category } = action.payload;
      const book = state.find(book => book.id === id);
      if (book) {
        book.title = title;
        book.author = author;
        book.category = category;
      }
    },
  },
});

const authorsSlice = createSlice({
  name: 'authors',
  initialState: [],
  reducers: {
    addAuthor: (state, action) => {
      state.push(action.payload);
    },
    removeAuthor: (state, action) => {
      const index = state.findIndex(author => author.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    // Agrega más acciones según tus necesidades para authors
  },
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },
    removeCategory: (state, action) => {
      const index = state.findIndex(category => category.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    // Agrega más acciones según tus necesidades para categories
  },
});

const countrySlice = createSlice({
  name: 'country',
  initialState: '',
  reducers: {
    setCountry: (state, action) => {
      return action.payload;
    },
    // Agrega más acciones según tus necesidades para country
  },
});

const languageSlice = createSlice({
  name: 'language',
  initialState: '',
  reducers: {
    setLanguage: (state, action) => {
      return action.payload;
    },
    // Agrega más acciones según tus necesidades para language
  },
});

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    clearUser: () => {
      return null;
    },
    // Agrega más acciones según tus necesidades para user
  },
});

const rootReducer = combineReducers({
  books: booksSlice.reducer,
  authors: authorsSlice.reducer,
  categories: categoriesSlice.reducer,
  country: countrySlice.reducer,
  language: languageSlice.reducer,
  user: userSlice.reducer,
  // Agrega más reducers aquí si es necesario
});

const store = configureStore({
  reducer: rootReducer,
});

export const {
  addBook,
  removeBook,
  updateBook,
} = booksSlice.actions;
export const {
  addAuthor,
  removeAuthor,
} = authorsSlice.actions;
export const {
  addCategory,
  removeCategory,
} = categoriesSlice.actions;
export const {
  setCountry,
} = countrySlice.actions;
export const {
  setLanguage,
} = languageSlice.actions;
export const {
  setUser,
  clearUser,
} = userSlice.actions;

export default store;
