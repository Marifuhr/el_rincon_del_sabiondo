const { DataTypes } = require('sequelize');

module.exports = function(database){
    database.define('Language', {
        IdLanguage:{
            type: DataTypes.STRING(3),
            primaryKey: true,
        },
        language:{
            type: DataTypes.STRING(40),
            unique:true,
            allowNull: false,
            set(value){
                this.setDataValue('language', value ? value.trim().toLowerCase() : null)
            }
        }
    },{timestamps:false});
};