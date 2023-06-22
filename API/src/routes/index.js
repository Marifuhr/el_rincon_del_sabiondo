const express = require("express");
const routerBook = require("./routerBook");

const rootRouter = express.Router();

//Routes and middlewares
rootRouter.use("/books", routerBook);

module.exports = rootRouter;
