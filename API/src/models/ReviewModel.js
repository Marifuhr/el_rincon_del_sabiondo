const { DataTypes } = require("sequelize")
const generateIdUUID = require("../utils/generateIdUUID")

module.exports = function(database){
    database.define('Review',{
        IdReview:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            set(value){
                //! Clear THIS validation
                this.setDataValue('IdReview',value ?? generateIdUUID());
            }
        },
        IdUser:{
            type: DataTypes.UUID,
            allowNull: false,
            validate:{
                isUUID: 4
            }
        },
        IdBook:{
            type: DataTypes.UUID,
            allowNull: false,
            validate:{
                isUUID: 4
            }
        },
        rate:{
            type: DataTypes.FLOAT,
            allowNull: false,
            validate:{
                isFloat: true,
                min:0.0,
                max:5.0
            }
        },
        description:{
            type: DataTypes.STRING(500),
            allowNull: false,
            validate:{
                notEmpty: false,
                len:[10,500]
            },
            set(value){
                this.setDataValue('description', value.trim())
            }
        }
    });
};