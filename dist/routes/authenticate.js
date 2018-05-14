"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.post('/', authenticate);
async function authenticate(req, res) {
    const key = req.headers.authorization.slice(7, req.headers.authorization.length);
    try {
        if (key == '123')
            res.send('authorized');
    }
    catch (error) {
        res.send(error);
    }
}
module.exports = router;
