const express = require('express');
const path = require('path');


const onedegreeRouter = require('./routes/services/onedegree/opportunities');
const swaggerDocRouter = require('./routes/swagger/swagger');
const app = express();


app.use('/services/onedegree', onedegreeRouter);
app.use('/ext-svc/swagger', swaggerDocRouter);


module.exports = app;