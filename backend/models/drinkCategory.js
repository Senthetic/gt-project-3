const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    genericName:{
        type:String
    },
    averageAlcohol:{
        type: Number
    }
})

module.exports = mongoose.model("drinkCategories", CategorySchema);