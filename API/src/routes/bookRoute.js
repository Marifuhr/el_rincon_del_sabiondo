const express = require('express');
const bookHandler = require('../handlers/bookHandler');

const router = express.Router();

// Ruta para el bulk create de libros
router.post('/bulk-create', bookHandler.bulkCreateBooksHandler);

module.exports = router;
