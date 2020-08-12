const router = require('express').Router();
const https = require('https');

const apiEndpoint = "/v2/";
const queryParam = "?key=3d6e537f4a5a2a94ae51f7631d1d543c"

let options = {
    host:"https://api.brewerydb.com/v2/",
    path:'',
    method: 'GET'
}

router.get('/search', (req, res) => {
   
   https.get(options.host + 'beers'+ queryParam + '&name = '+ req.query.q, results =>{
    results.setEncoding('utf8');
    let receiver = '';
    results.on('data', p => receiver += p)
    results.on('end', () => res.json(JSON.parse(receiver).data))
   }).end()
      
})

module.exports = router;