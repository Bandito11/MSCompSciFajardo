"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profile_module_1 = require("./profile.module");
const router = express_1.Router();
router.put('/', profile);
async function profile(req, res) {
    let body;
    for (const prop in req.body) {
        body = JSON.parse(prop);
        break;
    }
    const profile = {
        username: body.username,
        firstName: body.firstName,
        middleName: body.middleName,
        lastName: body.lastName,
        address: body.address,
        state: body.state,
        city: body.city,
        country: body.country,
        zip: body.zip,
        phone: body.phone,
        creditCard: {
            number: parseInt(req.body.ccNumber),
            type: req.body.ccType
        }
    };
    try {
        const response = await profile_module_1.updateProfile(profile);
        res.send(response);
    }
    catch (error) {
        res.send(error);
    }
}
module.exports = router;
