"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = require("fs");
const router = express_1.Router();
router.get('/', function (req, res, next) {
    const dirPages = `${__dirname.slice(0, __dirname.length - 5)}/www/pages/index.html`;
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'charset': 'utf-8'
    });
    fs_1.readFile(dirPages, function (err, data) {
        if (err) {
            res.status(500);
            console.error(err);
            res.end('Couldn\'t retrieve the page, please try again!');
        }
        res.end(data);
    });
});
module.exports = router;
