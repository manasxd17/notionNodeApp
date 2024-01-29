const router = require('express').Router()

module.exports = () => {
    router.get('/average_amount', require("../controllers/transaction-controller").fetchAverage)
    router.get('/all_transactions', require("../controllers/transaction-controller").DateSpecificTrans)
    router.get('/top_users', require("../controllers/transaction-controller").TopUsers)
    return router
}