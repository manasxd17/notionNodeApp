const http = require("http")
const { PORT } = require("./config")
const expressApp = require("./app")

expressApp().then((app) => {
    const server = http.createServer(app)
    server.listen(PORT, (err) => {
        if(err){
            console.log(err)
        }
        else{
            console.log(`Server is running on port - ${PORT}`)
        }
    })
}).catch((error) => {
    console.log(error)
})