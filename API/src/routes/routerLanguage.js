const { Router } = require('express');
const routeLanguagesHandler = require('../handlers/routeLanguageHandler');

const routerLanguage = Router();

// Rutas
routerLanguage.get('/', routeLanguagesHandler);

// Middleware

module.exports = routerLanguage;
