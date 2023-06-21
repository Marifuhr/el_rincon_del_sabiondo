const { DataTypes } = require("sequelize")

module.exports = function(database){
    database.define('Selling',{
        IdSelling:{
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        IdProduct:{
            type: DataTypes.UUID,
            allowNull: false,
        },
        IdSellingTotal:{
            type: DataTypes.UUID,
            allowNull: false,
        }
    },{timestamps:false});
};