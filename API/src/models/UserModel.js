const { DataTypes } = require("sequelize");
const generateIdUUID = require("../utils/generateIdUUID");

module.exports = function(database){
    database.define('User',{
        IdUser:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
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
        phoneNumber:{
            type: DataTypes.STRING(15),
            allowNull:false,
            unique:true,
            validate:{
                len:[0,13],
                isInt:true
            }
        },
        birthdate:{
            type: DataTypes.DATE,
            allowNull: false,
            validate:{
                isDate:true,
                isBefore: new Date().toISOString()
            }
        },
        image:{
            type: DataTypes.TEXT,
            allowNull: false,
            validate:{
                //! Validate BEFORE info work flow with cloudinary
                isUrl: true
            }
        },
        countryUser:{
            //? Association with Country in relationsModels.js 1:N
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                isNumeric: false,
            },
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
        //? Association with authors in relationsModels.js N:N
    })
}