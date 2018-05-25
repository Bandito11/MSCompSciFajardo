import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan'; //Only in dev
import { verifyAuthentication } from './authenticate/authenticate.module';


const app = express();
require('dotenv').config();
require('http').globalAgent.maxSockets = 5;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev')); //Only in dev
const path = require('path');

// Only allow if you want to use it as an API.
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DElETE");
  next();
});

app.disable('x-powered-by');

//In order to call static pages to be used on the front end. 
app.use(express.static(path.join(__dirname, 'www')));


// Imported routes to be used
const main = require('./main/main.route.js');
const authenticate = require('./authenticate/authenticate.route.js');
const catalog = require('./catalog/catalog.route.js');

//Routes
app.get('*', main);
app.use('/catalog', catalog);

// Routes that needs authentication
app.use('/authenticate', authenticate);
app.use(verifyAuthentication);

//Error Handling, always goes last. 
app.use(function (err, req, res, next) {
  console.error(err)
  res.end('There was an error in the system, please try again!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Listening on port: ${PORT}`);
});







