"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticate_module_1 = require("./authenticate.module");
const router = express_1.Router();
router.post('/', authenticate);
async function authenticate(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const response = await authenticate_module_1.checkAuthentication({ username: username, password: password });
    if (response.success) {
        res.send(response);
    }
    else {
        res.send(response);
    }
}
module.exports = router;
