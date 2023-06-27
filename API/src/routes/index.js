const express = require("express");
const routerBook = require("./routerBook");
const routerCategory = require('./routerCategory');
const routerLanguage = require("./routerLanguage");
const bulkCreateBooksHandler = require('../handlers/BulkCreateBooksHandler');
const routerAuthor = require("./routerAuthor");

const rootRouter = express.Router();

//Routes and middlewares
rootRouter.use("/books", routerBook);
rootRouter.use('/category', routerCategory);
rootRouter.use('/language', routerLanguage);
rootRouter.use('/authors', routerAuthor);
rootRouter.post('/bulkcreate', bulkCreateBooksHandler)

module.exports = rootRouter;
