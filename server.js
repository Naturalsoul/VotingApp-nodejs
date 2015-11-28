var express = require("express")
var mongoose = require("mongoose")
var bodyParser = require("body-parser")

var server = express()
server.set("view engine", "jade")
mongoose.connect("mongodb://localhost/votingapp")
server.use(express.static("public"))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: false}))

var users = require("./routes/users.js")

server.get("/", function(req, res) {
    res.render("index")
})

server.post("/signup", users.create)
server.post("/login", users.login)

server.listen(8080, function() {
    console.log("Hey! I'm listening in the port 8080 ;D")
})