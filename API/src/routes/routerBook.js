const { Router } = require('express');
const routeBooksHandler = require('../handlers/routeBooksHandler.js');

const routerBook = Router();

//Routes
routerBook.get("/", routeBooksHandler);

// Middlewares

module.exports = routerBook;