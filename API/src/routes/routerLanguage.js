const { Router } = require('express');
const routeLanguagesHandler = require('../handlers/routeLanguagesHandler.js');

const routerLanguage = Router();

// Rutas
routerLanguage.get('/', routeLanguagesHandler);

// Middleware

module.exports = routerLanguage;
