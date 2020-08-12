const router = require('express').Router();
const models = require('../models')

router.get('/', (req, res) => {
    console.log('this route!')
    // get my plans from model
    models.Plans.find({userId:1}).then(plans => {
        res.json(plans)
    })
    
})

router.get('/:planId', (req, res) => {
    
    models.Plans.findOne({userId:1, _id:req.params.planId}).then(plans => {
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
    models.Plans.findOne({_id:req.params.id}).then(plan => {
        plan.drinks.push({
            size: req.body.size,
            name:req.body.name,
            category: req.body.category,
            alcoholPercentage: req.body.alcoholPercentage,
        })
        plan.save();
        res.json(plan)
    }).catch(err => {
        res.status(404)
    })
})

router.delete('/:id', (req, res) => {
    models.Plans.findOneAndRemove(req.params.id).then(() =>res.json({request:'received'}) )
   
})
router.delete('/:id/drink/:drinkId', (req, res) => {
    models.Plans.findOne({'_id':req.params.id}).then(plan => {
        plan.drinks = plan.drinks.filter(drink => drink._id != req.params.drinkId);
        plan.save();
        res.json(plan)
    }).catch(err => {
        res.status(404)
    })

})

module.exports = router;