var express = require("express");

var server = express();
server.set("view engine", "jade");

server.get("/", function(req, res) {
    res.render("index");
});

server.listen(8080, function() {
    console.log("Hey! I'm listening in the port 8080 ;D");
});