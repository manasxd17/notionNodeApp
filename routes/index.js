const routes = require('express').Router()

module.exports = () => {
    routes.use('/transaction', require("./transaction-routes")())
    return routes
}