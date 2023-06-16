const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Genero = sequelize.define('Genero', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Genero;
