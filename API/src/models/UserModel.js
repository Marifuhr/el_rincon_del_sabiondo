const { DataTypes } = require("sequelize");
const generateIdUUID = require("../utils/generateIdUUID");

module.exports = function(database){
    database.define('User',{
        IdUser:{
            type: DataTypes.TEXT,
            primaryKey:true,
            set(value){
                //! Clear THIS validation
                this.setDataValue('IdUser', value ? value : generateIdUUID());
            }
        },
        name:{
            type: DataTypes.STRING(60),
            allowNull: false,
            validate:{
                notEmpty:true,
                len:[5,60]
            },
        },
        email:{
            type: DataTypes.STRING(50),
            allowNull:false,
            unique: true,
            validate:{
                isEmail: {
                    msg:'The value is not an Email'
                },
                len:[5,50],
                notNull:{
                    msg:'The value cannot be null'
                },
                notEmpty: true
            }
        },
        picture:{
            type: DataTypes.TEXT,
            allowNull: false,
            validate:{
                //! Validate BEFORE info work flow with cloudinary
                isUrl: true
            }
        },
        payMethod:{
            type:DataTypes.TEXT,
            allowNull: true,
        },
        isActive:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        role:{
            type: DataTypes.STRING(20),
            allowNull: false,
            defaultValue: 'user',
            validate:{
                isIn: [['user', 'moderator', 'admin', 'superuser']]
            }
        }
        //? Association with wichList in relationsModels.js N:N
        //? Association with sellings in relationsModels.js N:N
        //? Association with Reviews in relationsModels.js N:1
    })
}