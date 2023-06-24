const { DataTypes } = require("sequelize")

module.exports = function(database){
    database.define('Country',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING(50),
            allowNull: false,
            defaultValue: 'ar',
            validate:{
                notEmpty:true,
                len: [4,30]

            },
            set(value){
                this.setDataValue('name', value ? value.trim().toLowerCase() : null);
            }
        }
    },{timestamps: false});
};