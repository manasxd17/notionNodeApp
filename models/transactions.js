const { DataTypes } = require("sequelize");
const db  = require("../utils/db-connection");

const transactions = db.define('transactions', {
    TransactionID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    UserID: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Timestamp: {
        type: DataTypes.STRING,
        allowNull: true
    }
},
    {
        indexes: [
            {
                unique: false,
                fields: ['UserID', 'Timestamp']
            },
            {
                unique: false,
                fields: ['Amount']
            }
        ]
    })



module.exports = transactions
