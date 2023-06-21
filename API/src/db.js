const fs = require('fs');
const path = require('path');

const Sequelize = require('sequelize');
const {
    DB_HOST_CLOUD,
    DB_PASSWORD_CLOUD,
    DB_USER_CLOUD,
    DB_NAME_CLOUD,
    DB_PORT_CLOUD,
} = process.env;

const gistUrlDB = `postgres://${DB_USER_CLOUD}:${DB_PASSWORD_CLOUD}@${DB_HOST_CLOUD}:${DB_PORT_CLOUD}/${DB_NAME_CLOUD}`;

const db = new Sequelize(gistUrlDB,{logging:false});

//Executa todos los modelos en Modelo
const pathModels = path.join(__dirname + '/models/');
fs.readdirSync(pathModels).forEach(file => {
    const pathFunctionModel = pathModels + file;
    require(pathFunctionModel)(db);
});

module.exports = {
    db,
    ...db.models
}