const bodyParser = require("body-parser")
const expressApp = require("express")
const cors = require("cors")
const { syncAllTables } = require("./models")

module.exports = async() => {
    const app = expressApp()

    app.use(bodyParser.urlencoded({extended : true}))

    app.use(bodyParser.json())

    app.use(cors({
        origin : "*",
        methods : ["POST", "PUT", "GET", "DELETE"]
    }))

    app.use('/api/serverCheck', function(req, res, next){
        res.status(200).json({"success":true, "message" : "Server is up and running"})
    })

    await syncAllTables()

    app.use('/api', require("./routes/index")())

    return app
}