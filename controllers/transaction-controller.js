const { Sequelize, Op } = require("sequelize")
const transactions = require("../models/transactions")

const fetchAverage = async (req, res, next) => {
    try {
        const resp = await transactions.findAll({
            attributes: [
                [Sequelize.fn('AVG', Sequelize.col('Amount')), 'average_amount']
            ],
            raw: true
        })
        console.log(resp)
        res.status(200).json({ success: true, data: resp })
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

const DateSpecificTrans = async (req, res, next) => {
    try {
        if (req.query.date) {
            const resp = await transactions.findAll({
                where: {
                    Timestamp: {
                        [Op.like]: `%${req.query.date}%`
                    }
                },
                raw: true
            })
            console.log(resp)
            res.status(200).json({ success: true, data: resp })
        }
        else {
            res.status(400).json({ success: false, message: "Request body error" })
        }
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

const TopUsers = async (req, res, next) => {
    try {
        if (req.query.limit) {
            const resp = await transactions.findAll({
                attributes: [
                    'UserID',
                    [sequelize.fn('sum', sequelize.col('Amount')), 'total_amount'],
                  ],
                group : [UserID],
                order : [["total_amount", "DESC"]],
                limit : req.query.limit,
                raw: true
            })
            console.log(resp)
            res.status(200).json({ success: true, data: resp })
        }
        else {
            res.status(400).json({ success: false, message: "Request body error" })
        }
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}



module.exports = {
    fetchAverage,
    DateSpecificTrans,
    TopUsers
}