const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Reemplaza './sequelize' con la ruta correcta a tu archivo de configuración de Sequelize

const Libreria = sequelize.define('libreria', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  editorial: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  paginas: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  generos: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idioma: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  review: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  }
});

module.exports = Libreria;
