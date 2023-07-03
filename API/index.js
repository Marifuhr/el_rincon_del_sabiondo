require('dotenv').config();

const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const { auth } = require('express-openid-connect');

//Info local enviroments
const port = process.env.PORT_SERVER || 3001;

//Local Changes
const server = require('./src/app.js');
const {db} = require('./src/db.js');
const rootRouter = require('./src/routes/index.js');

server.use(morgan('dev'));
server.use(express.json());
server.use(cors());
server.use(
    auth({
        authRequired: false,
        issuerBaseURL: 'https://YOUR_AUTH0_DOMAIN',
        baseURL: 'http://localhost:5173',
        clientID: '0VbI0VgjMwnZ0YhQZZ4tJSjfcc7v7jaq',
        secret: '-OVdWrqmPDOF-0SPFpwybF1QTfe3mUOSuHW3Xqn2SitSPLRK0zpLI_1K-Wn41mrL',
    })
);

//! Añadir rutas
server.use(rootRouter);

//sincronizando base de datos con la DB_CLOUD
db.sync({alter:true}).then(() => {
    //execute server
    server.listen(port, () => {
        console.log(`servidor corriendo en: ${port}`);
    })
});