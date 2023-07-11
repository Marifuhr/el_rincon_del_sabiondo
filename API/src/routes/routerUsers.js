const { Router } = require('express');
const routePostUserHandler = require('../handlers/routePostUserHandler');
const updateUserPutHandler = require('../handlers/updateUserPutHandler');
const getUsers = require('../handlers/getUsersHandler');

const routerUsers = Router();

routerUsers.post('/', routePostUserHandler);
routerUsers.put('/:id_user', updateUserPutHandler);
routerUsers.get('/', getUsers);


module.exports = routerUsers;