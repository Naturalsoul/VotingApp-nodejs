var users = require("../models/users.model.js")
var UserModel = new users()

exports.create = function(req, res) {
    if(req.method.toLowerCase() != "post") res.render("index.jade")
    else {
        new users(req.body).save()
        res.send("ok")
    }
}