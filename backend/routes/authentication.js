const router = require('express').Router();
const models = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret = ')*(ylsdhf7';

router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10, function(err, hash){
        let newUser = {... req.body, password: hash};
        models.Users.create(newUser).then(userObj => {
            res.json({token:jwt.sign({...userObj}, secret)})
        })
    })
})
router.post('/login', (req, res) => {
    models.Users.findOne({email:req.body.email}).then(user => {
        // verify passsword
        bcrypt.compare(req.body.password, user.password, function(err, result){
            if(err){
                console.log('passwords do not match')
                res.status(401).end()
            }
            res.json({token:jwt.sign({...user}, secret)})
        })

    }).catch(err => {
        console.log('user not found')
        res.status(401).end()
    })
    
})

module.exports = router;