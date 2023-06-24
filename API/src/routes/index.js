const express = require("express");
const routerBook = require("./routerBook");
const routerCategory = require('./routerCategory');
const routerLanguage = require("./routerLanguage");
const bulkCreateController = require('../handlers/BulkCreateController')

const rootRouter = express.Router();

//Routes and middlewares
rootRouter.use("/books", routerBook);
rootRouter.use('/category', routerCategory);
rootRouter.use('/language', routerLanguage);
rootRouter.post('/bulkcreate', bulkCreateController)

module.exports = rootRouter;
