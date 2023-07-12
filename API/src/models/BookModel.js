const generatedUUID = require('../utils/generateIdUUID.js');
const { DataTypes } = require('sequelize');

module.exports = function (database) {
    database.define('Book', {
        IdBook: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            set(value) {
                //! Clear THIS validation
                this.setDataValue('IdBook', value ? value : generatedUUID());
            },
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2 - 120],
                notNull: {
                    msg: 'The title cannot be empty'
                }
            }
        },
        description: {
            type: DataTypes.STRING(5000),
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        language: {
            //? Association with Language in relationsModels.js 1:N
            type: DataTypes.STRING(3),
            allowNull: false,
            validate: {
                //isNumeric: false,
                len: [2, 3]
            }
        },
        datePublication: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
                //isBefore: new Date().toISOString()
            }
        },
        publisher: {
            type: DataTypes.STRING(120),
            allowNull: false,
            validate: {
                len: [2, 100],
                notEmpty: true,
            }
        },
        numberPages: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            allowNull: false,
            validate: {
                min: 1,
                notEmpty: true
            },
        },
        rate: {//VIRTUAL
            type: DataTypes.FLOAT,
            defaultValue: 0.0,
            validate: {
                min: 0.0,
                max: 5.0,
                notEmpty: true,
            }
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        isbn: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
            validate: {
                len: [10, 20],
                notEmpty: true,
            },
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        stock:{
            type: DataTypes.INTEGER,
            defaultValue: 0,
            validate:{
                min:0,
            }
        }
        //? Association with BookCategory in relationsModels.js N:N
        //? Association with BookReviews in relationsModels.js N:N
        //? Association with Authors in relationsModels.js N:N

    }, { timestamps: false });
};