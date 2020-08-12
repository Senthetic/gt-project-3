const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:{
        type: String
    },
    password: {
        
    }
})

module.exports = mongoose.model("plans", PlanSchema);