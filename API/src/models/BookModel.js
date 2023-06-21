const generatedUUID = require('../utils/generateIdUUID.js');
const { DataTypes } = require('sequelize');

module.exports = function(database){
    database.define('Book', {
        IdBook:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            set(value){
                //! Clear THIS validation
                this.setDataValue('IdBook',value ? value : generatedUUID());
            },
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[2-50],
                notNull:{
                    msg:'The title cannot be empty'
                }
            }
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true,
            }
        },
        language:{
            //? Association with Language in relationsModels.js 1:N
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                isNumeric: true,
                min:1
            }
        },
        writers:{
            type: DataTypes.ARRAY(DataTypes.STRING),
            validate:{
                notEmpty:true,
                len:[2]
            }
        },
        datePublication:{
            type: DataTypes.DATE,
            allowNull: false,
            validate:{
                isDate: true,
                //isBefore: new Date().toISOString()
            }
        },
        countryPublication:{
            //? Association with country in relationsModels.js 1:N
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                isNumeric: true,
                min:1
            }
        },
        publisher:{
            type: DataTypes.STRING(50),
            allowNull: false,
            validate:{
                len:[2,50],
                notEmpty: true,
            }
        },
        numberPages:{
            type: DataTypes.INTEGER,
            defaultValue:1,
            allowNull: false,
            validate:{
                min:1,
                notEmpty: true
            },
        },
        rate:{//VIRTUAL
            type: DataTypes.FLOAT,
            defaultValue: 0.0,
            validate:{
                min: 0.0,
                max:5.0,
                notEmpty:true,
            }
        }
        //? Association with BookCategory in relationsModels.js N:N
        //? Association with BookReviews in relationsModels.js N:N
    },{timestamps: false});
};