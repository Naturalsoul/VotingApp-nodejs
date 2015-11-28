var express = require("express")
var mongoose = require("mongoose")

var server = express()
server.set("view engine", "jade")
mongoose.connect("mongodb://localhost/votingapp")
server.use(express.static("public"))

var users = require("./routes/users.js")

server.get("/", function(req, res) {
    res.render("index")
})

server.post("/signup", users.create)

server.listen(8080, function() {
    console.log("Hey! I'm listening in the port 8080 ;D")
})