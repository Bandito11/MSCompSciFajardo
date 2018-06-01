"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profile_module_1 = require("./profile.module");
const router = express_1.Router();
router.put('/', profile);
async function profile(req, res) {
    const profile = {
        username: req.body.username,
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        address: req.body.address,
        state: req.body.state,
        city: req.body.city,
        country: req.body.country,
        zip: req.body.zip,
        phone: req.body.phone,
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
