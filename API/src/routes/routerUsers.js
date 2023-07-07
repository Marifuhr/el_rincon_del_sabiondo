const { Router } = require('express');
const routePostUserHandler = require('../handlers/routePostUserHandler');

const routerUsers = Router();

routerUsers.post('/', routePostUserHandler);

module.exports = routerUsers;