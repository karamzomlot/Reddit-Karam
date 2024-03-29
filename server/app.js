const express = require('express');
const { invokeMiddelwares } = require('./middleware');
require('env2')('.env')

const app = express();

invokeMiddelwares(app)

app.set('PORT', process.env.PORT || 8080);

module.exports = app;