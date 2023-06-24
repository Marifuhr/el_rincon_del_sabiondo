const express = require('express');
const bulkCreateBooksFromFile = require('../handlers/bulkCreateBooksFromFile');

const router = express.Router();

router.post('/', bulkCreateBooksFromFile);

module.exports = router;