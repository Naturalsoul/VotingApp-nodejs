var mongoose = require("mongoose")
var schema = mongoose.Schema
var ObjectId = schema.ObjectId

var usersSchema = new schema({
    ObjectId: ObjectId,
    date: {type: Date, default: Date.now},
    name: String,
    email: String,
    pass: String
})

module.exports = mongoose.model("Users", usersSchema)