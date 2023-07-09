const { Router } = require('express');
const routePostUserHandler = require('../handlers/routePostUserHandler');
const updateUserPutHandler = require('../handlers/updateUserPutHandler');

const routerUsers = Router();

routerUsers.post('/', routePostUserHandler);
routerUsers.put('/:id_user', updateUserPutHandler);

module.exports = routerUsers;