require('dotenv').config();

const morgan = require('morgan');
const express = require('express');
const cors = require('cors');


//Info local enviroments
const port = process.env.PORT_SERVER || 3001;
const host = process.env.HOST_SERVER || 'localhost';

//Local Changes
const server = require('./src/app.js');
const {db} = require('./src/db.js');
const rootRouter = require('./src/routes/index.js');

server.use(morgan('dev'));
server.use(express.json());
server.use(cors());

//! Añadir rutas
server.use(rootRouter);

//sincronizando base de datos con la DB_CLOUD
db.sync({alter:true}).then(() => {
    //execute server
    server.listen(port, host, () => {
        console.log(`servidor corriendo en: ${port}`);
    })
});