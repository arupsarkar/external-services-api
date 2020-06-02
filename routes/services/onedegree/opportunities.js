const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser')

const router = express.Router();

// create application/json parser
const jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/opportunities/:api_key', urlencodedParser, async (req, res, next) => {
    try{
        console.log('before req.params.api_key', req.params.api_key);
        let api_key = req.params.api_key;
        console.log('after api_key', api_key);
        //const response = await axios.get('https://api.neoscan.io/api/main_net/v1/get_all_nodes');
        //const response = await axios.get('https://data.1degree.org/v1/opportunities?api_key=be9a3c70842d0138f4d20614a1d2fcd4&ids=1');
        const response = await axios.get('https://data.1degree.org/v1/opportunities?api_key=' + api_key + '&query[text]=health+clinic&query[lat]=37.7823&query[long]=-122.46'); 
        res.json(response.data);
    }catch(err) {
        console.log('error : ', err);
        next(err);
    }
})



module.exports = router;