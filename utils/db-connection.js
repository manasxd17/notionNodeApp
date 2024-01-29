const sequalize = require("sequelize")
const { SQL_DB_NAME, SQL_USERNAME, SQL_PASSWORD, SQL_HOST } = require("../config")


const db = new sequalize(SQL_DB_NAME, SQL_USERNAME, SQL_PASSWORD, {
    host: SQL_HOST,
    dialect: "mysql"
})

// const checkDBConnection = async() => {
//     try{
//         await db.authenticate()
//         console.log("DB Connection Established")
//     }
//     catch(error){
//         console.log(error)
//     }
// }

module.exports = db