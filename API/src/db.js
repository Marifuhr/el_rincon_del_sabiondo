const libro = require("./models/Libreria.js")
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
libro(db);

module.exports = {
    db,
    ...db.models
}