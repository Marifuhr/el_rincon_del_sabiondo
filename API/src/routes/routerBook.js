const { Router } = require('express');
const routeBooksHandler = require('../handlers/routeBooksHandler.js');
const createBookHandler = require('../handlers/createBookHandler.js')


const router = Router();

//Routes
router.get("/", routeBooksHandler);
router.post('/', createBookHandler)

// Middlewares

module.exports = router;