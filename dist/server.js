"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const authenticate_module_1 = require("./authenticate/authenticate.module");
const app = express();
require('http').globalAgent.maxSockets = Infinity;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const path = require('path');
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DElETE');
    next();
});
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, 'www')));
const main = require('./main/main.route.js');
const authenticate = require('./authenticate/authenticate.route.js');
const catalog = require('./catalog/catalog.route.js');
const profile = require('./profile/profile.route.js');
app.get('*', main);
app.use('/catalog', catalog);
app.use('/profile', profile);
app.use('/authenticate', authenticate);
app.use(authenticate_module_1.verifyAuthentication);
app.use(function (err, req, res, next) {
    console.error(err);
    res.end('There was an error in the system, please try again!');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(`Listening on port: ${PORT}`);
});
