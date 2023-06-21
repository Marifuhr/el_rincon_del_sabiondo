const { DataTypes } = require("sequelize");

module.exports = function(database){
    database.define('Category',{
        IdCategory:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category:{
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false,
            set(value){
                this.setDataValue('category',value ? value.trim().toLowerCase() : null);
            },
        }
    },{timestamps:false});
};