const express = require('express');
const path = require('path');


const onedegreeRouter = require('./routes/services/onedegree/opportunities');
const swaggerDocRouter = require('./routes/swagger/swagger');
const swaggerSchema = require('./routes/swagger/swagger.json');
const app = express();


app.use('/services/onedegree', onedegreeRouter);
app.use('/ext-svc/swagger', swaggerDocRouter);
app.use('/ext-svc/swagger/schema', swaggerSchema);


module.exports = app;