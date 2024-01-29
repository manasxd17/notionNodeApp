const transactions = require("./transactions")

const syncAllTables = async() => {
    await transactions.sync({alter : true})
}

module.exports = { syncAllTables }