require('dotenv').config();

const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const { auth } = require('express-openid-connect');
const mercadopago = require("mercadopago");
const bulk = require("../API/src/handlers/bulkCreateBooksFromFile")

mercadopago.configure({
    access_token: process.env.TOKEN_ACCESS_MERCADO_PAGO,
});

//Info local enviroments
const port = process.env.PORT_SERVER || 3001;

//Local Changes
const server = require('./src/app.js');
const {db} = require('./src/db.js');
const rootRouter = require('./src/routes/index.js');

server.use(
    auth({
        authRequired: false,
        issuerBaseURL: 'https://YOUR_AUTH0_DOMAIN',
        baseURL: process.env.HOST_FRONT_URL,
        clientID: process.env.AUTH0_CLIENT_ID,
        secret: process.env.SECRET_TOKEN_AUTH0
    })
);
server.use(morgan('dev'));
server.use(express.json());
server.use(cors());

//! Añadir rutas
server.use(rootRouter);

//sincronizando base de datos con la DB_CLOUD
db.sync({alter:true}).then(() => {
    //execute server
    server.listen(port, () => {
        console.log(`servidor corriendo en: ${port}`);
        bulk();
    })
});