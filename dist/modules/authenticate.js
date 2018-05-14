"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function verifyAuthentication(req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        if (token == '123') {
            res.send('token validated');
        }
    }
    else {
        return res.status(403).send('token error');
    }
}
exports.verifyAuthentication = verifyAuthentication;
