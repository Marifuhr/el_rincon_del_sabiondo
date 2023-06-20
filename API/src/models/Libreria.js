const { DataTypes } = require('sequelize');


const Libro = (sequelize) => sequelize.define('libro', {
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
  fechaPublicacion: {
    type: DataTypes.INTEGER,
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
  imagen: {
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
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  }
}, { timestamps: false });

module.exports = Libro;
