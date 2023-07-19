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
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
              isInt: {
                msg: "Quantity must be an integer.",
              },
            },
          }
        }, { timestamps: false });
      };
