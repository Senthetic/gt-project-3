const router = require('express').Router();
const models = require('../models')

router.get('/', (req, res) => {
    console.log('this route!')
    // get my plans from model
    models.Plans.find({userId:1}).then(plans => {
        res.json(plans)
    })
    
})

router.post('/', (req, res) => {
    models.Plans.create({
        userId:1,
        name: req.body.name,
        drinks: []
    }).then(plan => res.json(plan))
})

router.put('/:id', (req, res) => {
    models.Plans.findOn
})

module.exports = router;