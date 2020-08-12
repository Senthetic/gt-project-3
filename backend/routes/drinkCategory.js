const router = require('express').Router();
const models = require('../models')

router.get('/', (req, res) => {
   
    models.DrinkCategories.find({}).then(categories => {
        res.json(categories)
    })
    
})

module.exports = router;