const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        unique: true
    },
    gender:{
        type: String

    },
    age: {
        type: Number
    },
    weight: {
        type: Number
    },
    height: {
        type: String
    }
})

module.exports = mongoose.model("users", UserSchema);