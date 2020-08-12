const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
    startTime:{
        type: Date
    },
    userId:{
        type: String
    },
    name:{
        type:String
    },
    drinks:[{
        size:{
            type: String,
            required: "Size required!"
        },
        name: {
            type: String
        },
        category: {
            type: String
        },
        alcoholPercentage:{
            type: Number
        }
        
    }]
})

module.exports = mongoose.model("plans", PlanSchema);