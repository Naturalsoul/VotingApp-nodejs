var users = require("../models/users.model.js")
var UserModel = new users()

exports.create = function(req, res) {
    if(req.method.toLowerCase() != "post") res.render("index.jade")
    else {
        var user = {
            name: req.body.signupName,
            email: req.body.email,
            pass: req.body.signupPass
        }
        
        new users({ name: user.name, email: user.email, pass: user.pass }).save()
        res.send("ok")
    }
}

exports.login = function(req, res) {
    if(req.method.toLowerCase() != "post") res.render("index.jade")
    else {
        users.findOne({name: req.body.loginName}, function(err, data) {
            if(err) throw err
            if(data == null) {
                res.send("Invalid Username", {"Content-type" : "text/plain"}, 403)
            }
            else auth(data)
        })
        
        function auth(userRes) {
            if(req.body.loginPass != userRes.pass) {
                res.send("Invalid Password", {"Content-type": "text/plain"}, 403)
            } else {
                console.log(userRes._id)
                users.update({_id: userRes._id}, {"$set" : {token : Date.now}})
                res.send("Connected! ;D")
            }
        }
    }
}

