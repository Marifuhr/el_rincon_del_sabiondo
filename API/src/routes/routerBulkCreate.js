const express = require('express');
const bulkCreateBooksHandler = require('../handlers/bulkCreateBooksHandler');

const router = express.Router();

router.post('/', bulkCreateBooksHandler);

module.exports = router;