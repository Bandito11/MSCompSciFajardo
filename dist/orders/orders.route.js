"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.put('/', orders);
async function orders(req, res) {
    res.send('hello from orders');
}
module.exports = router;
