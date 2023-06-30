const { Router } = require('express');
const routeCategoryHandler = require('../handlers/routeCategoryHandler.js');

const routerCategory = Router();

//Routes
routerCategory.get("/", routeCategoryHandler);

// Middlewares

module.exports = routerCategory;