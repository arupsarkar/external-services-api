const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser')

const router = express.Router();

// create application/json parser
const jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/validate/:address_string', urlencodedParser, async (req, res, next) => {
    try{
        console.log('before req.params.address string', req.params.address_string);
        let address_string = req.params.address_string;
        console.log('after api_key', address_string);
        res.send(true);
    }catch(err) {
        console.log('error : ', err);
        next(err);
    }
})



module.exports = router;