const express = require('express');
const path = require('path');


const onedegreeRouter = require('./routes/services/onedegree/opportunities');
const swaggerDocRouter = require('./routes/swagger/swagger');
const addressRouter = require('./routes/services/address/validate');
const app = express();


// Setup express static middleware to look for files in the api directory for all requests starting with /api
app.use('/api', express.static('./routes/swagger') , function(req, res){
    // Optional 404 handler
    res.status(404);
    res.json({error:{code:404}})
});

app.use('/services/onedegree', onedegreeRouter);
app.use('/ext-svc/swagger', swaggerDocRouter);
app.use('/services/address', addressRouter);


module.exports = app;