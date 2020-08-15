const router = require('express').Router();
const models = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret = ')*(ylsdhf7';

router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10, function(err, hash){
        let newUser = {... req.body, password: hash};
        models.Users.create(newUser).then(userObj => {
            res.json({id:userObj._id})
        })
    })
})
router.post('/login', (req, res) => {
    models.Users.findOne({email:req.email}).then(user => {
        // verify passsword
        bcrypt.compare(req.password, user.password, function(err, result){
            if(err){
                res.status(401).exit()
            }
            res.json({token:jwt.sign(user, secret)})
        })

    }).catch(err => {
        res.status(401).exit()
    })
    
})

module.exports = router;