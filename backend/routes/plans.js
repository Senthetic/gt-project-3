const router = require('express').Router();
const models = require('../models')

function authenticated(req, res, next){
    if(!req.user){
        res.status(401).end();
    } else {
        next()
    }
}

router.get('/', authenticated, (req, res) => {
    
    // get my plans from model
    models.Plans.find({userId:req.user._id}).then(plans => {
        res.json(plans)
    })
    
})

router.get('/:planId', authenticated, (req, res) => {
    
    models.Plans.findOne({userId:req.user._id, _id:req.params.planId}).then(plans => {
        res.json(plans)
    })
    
})

router.post('/', authenticated, (req, res) => {
    models.Plans.create({
        userId:req.user._id,
        name: req.body.name,
        drinks: []
    }).then(plan => res.json(plan))
})

router.put('/:id', authenticated, (req, res) => {
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

router.delete('/:id', authenticated, (req, res) => {
    models.Plans.findOneAndRemove({_id:req.params.id}).then(() =>res.json({request:'received'}) )
   
})
router.delete('/:id/drink/:drinkId', authenticated, (req, res) => {
    models.Plans.findOne({'_id':req.params.id}).then(plan => {
        plan.drinks = plan.drinks.filter(drink => drink._id != req.params.drinkId);
        plan.save();
        res.json(plan)
    }).catch(err => {
        res.status(404)
    })

})

module.exports = router;