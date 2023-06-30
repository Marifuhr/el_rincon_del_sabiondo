const { Router } = require('express');
const routeAuthorsHandler = require('../handlers/routeAuthorsHandler');

//Creación del router
const routerAuthor = Router();

//Rutas
routerAuthor.get('/', routeAuthorsHandler);

// Exportación
module.exports = routerAuthor;