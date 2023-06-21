const { DataTypes } = require("sequelize")

module.exports = function(database){
    database.define('Country',{
        IdCountry:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        country:{
            type: DataTypes.STRING(50),
            allowNull: false,
            validate:{
                notEmpty:true,
                len: [4,30]
            },
            set(value){
                this.setDataValue('country', value ? value.trim().toLowerCase() : null);
            }
        }
    },{timestamps: false});
};