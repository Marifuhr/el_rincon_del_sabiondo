const { DataTypes } = require("sequelize");
const generateIdUUID = require("../utils/generateIdUUID");

module.exports = function(database) {
    database.define('SellingTotal', {
        IdSellingTotal: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            set(value) {
                //! VALIDATE THIS AFTER validate all
                this.setDataValue('IdSellingTotal', value ? value : generateIdUUID());
            }
        },
        IdUser: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
    }, {
        timestamps: true,
        createdAt: true,
        updatedAt: false
    });
}
