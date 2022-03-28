const compression = require('compression');
const cookieParser = require('cookie-parser');
const express = require('express');
const fileUpload = require('express-fileupload');
const { join } = require('path');
const { clientError, serverError } = require('../controller');
const router = require('../router');

const invokeMiddelwares = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
    app.use(compression());
    app.use(cookieParser());
    app.use(fileUpload());
    app.use(express.static(join(__dirname, '..', '..', 'public')));

    app.use(router)

    // Errors
    app.use(clientError);
    app.use(serverError);
}


module.exports = invokeMiddelwares;