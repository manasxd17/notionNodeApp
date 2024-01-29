require("dotenv").config()

module.exports = {
    "PORT" : process.env.PORT,
    "SQL_HOST" : process.env.SQL_HOST,
    "SQL_USERNAME" : process.env.SQL_USERNAME,
    "SQL_PASSWORD" : process.env.SQL_PASSWORD,
    "SQL_DB_NAME" : process.env.SQL_DB_NAME,
    "SQL_PORT" : process.env.SQL_PORT
}