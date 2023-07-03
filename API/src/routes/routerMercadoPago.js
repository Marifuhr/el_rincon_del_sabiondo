const express = require('express');
const handlerCreatePreference = require('../handlers/handlerCreatePreference');

const routerMercadoPago = express.Router();

routerMercadoPago.post("/create_preference", handlerCreatePreference);

module.exports = routerMercadoPago;