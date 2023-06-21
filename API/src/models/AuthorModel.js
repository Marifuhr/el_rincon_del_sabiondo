const { DataTypes } = require("sequelize");

module.exports = function(database) {
  const Author = database.define("Author", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });


  return Author;
};