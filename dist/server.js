"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const fs = require("fs");
const authenticate_1 = require("./modules/authenticate");
const app = express();
require('dotenv').config();
require('http').globalAgent.maxSockets = 5;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
const path = require('path');
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
    next();
});
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, 'www')));
const dirPages = 'www/pages';
const index = require('./routes/main.js');
const authenticate = require('./routes/authenticate.js');
app.use('/index', index);
app.get('/', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'charset': 'utf-8'
    });
    fs.readFile(`${__dirname}/${dirPages}/index.html`, function (err, data) {
        if (err) {
            res.status(500);
            console.error(err);
            res.end('Couldn\'t retrieve the page, please try again!');
        }
        res.end(data);
    });
});
app.use('/authenticate', authenticate);
app.use(authenticate_1.verifyAuthentication);
app.use(function (err, req, res, next) {
    console.error(err);
    res.end('There was an error in the system, please try again!');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(`Listening on port: ${PORT}`);
});
