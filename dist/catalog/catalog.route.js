"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const catalog_module_1 = require("./catalog.module");
const router = express_1.Router();
router.get('/', catalog);
async function catalog(req, res) {
    try {
        const products = await catalog_module_1.getLatestProducts();
        res.send(products);
    }
    catch (error) {
        res.send(error);
    }
}
module.exports = router;
