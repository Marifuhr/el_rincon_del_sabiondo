import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';

// Reducer para books
const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      return [...state, action.payload];
    },
    removeBook: (state, action) => {
      return state.filter(book => book.id !== action.payload);
    },
    
  },
});

// Reducer para authors
const authorsSlice = createSlice({
  name: 'authors',
  initialState: [],
  reducers: {
    addAuthor: (state, action) => {
      return [...state, action.payload];
    },
    removeAuthor: (state, action) => {
      return state.filter(author => author.id !== action.payload);
    },
    
  },
});

// Reducer para categories
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    addCategory: (state, action) => {
      return [...state, action.payload];
    },
    removeCategory: (state, action) => {
      return state.filter(category => category.id !== action.payload);
    },
    
  },
});


// Reducer para country
const countrySlice = createSlice({
  name: 'country',
  initialState: '',
  reducers: {
    setCountry: (state, action) => {
      return action.payload;
    },
    
  },
});

// Reducer para language
const languageSlice = createSlice({
  name: 'language',
  initialState: '',
  reducers: {
    setLanguage: (state, action) => {
      return action.payload;
    },
    
  },
});

// Reducer para user
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
    
  },
});

// Combina todos los reducers
const rootReducer = combineReducers({
  books: booksSlice.reducer,
  authors: authorsSlice.reducer,
  categories: categoriesSlice.reducer,
  country: countrySlice.reducer,
  language: languageSlice.reducer,
  user: userSlice.reducer,
  
});


const store = configureStore({
  reducer: rootReducer,
});

// Exporta las acciones de los reducers
export const { addBook, removeBook } = booksSlice.actions;
export const { addAuthor, removeAuthor } = authorsSlice.actions;
export const { addCategory, removeCategory } = categoriesSlice.actions;
export const { setCountry } = countrySlice.actions;
export const { setLanguage } = languageSlice.actions;
export const { setUser, clearUser } = userSlice.actions;

// Exporta el store
export default store;
