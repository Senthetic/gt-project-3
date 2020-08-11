const models = require('./models');

models.DrinkCategories.find({}).then(categories => {
    if(categories.length < 1){
        seed()
    }
})

const seed = () => {
    const drinks = [
        {Vodka: 45},
        {Gin: 40},
        {Rum: 42},
        {Whiskey: 40},
        {Tequilla: 50},
        {Liqueurs: 15},
        {'Fortified Wine': 18},
        {Wine: 14},
        {Beer: 5},
        {'Malt Beverage': 15}
    ];
    drinks.forEach(drink => {
        models.DrinkCategories.create({
            genericName: Object.keys(drink)[0],
            averageAlcohol: drink(Object.keys(drink)[0])
        })
       
    })

}