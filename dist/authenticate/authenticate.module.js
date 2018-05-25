"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const { Client } = require('pg');
function verifyAuthentication(req, res, next) {
    let token;
    try {
        token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization.slice(7, req.headers.authorization.length);
    }
    catch (error) {
        console.log(error);
    }
    if (token) {
        jsonwebtoken_1.verify(token, process.env.MSCOMP, (error, decoded) => {
            if (error) {
                return res.json({ success: false, message: 'Failed authentication!' });
            }
            else {
                res.locals.decoded = decoded;
                req.params.decoded = decoded;
                next();
            }
        });
    }
    else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
}
exports.verifyAuthentication = verifyAuthentication;
async function checkAuthentication(opts) {
    const text = 'Select username from users where username = $1 and password = $2';
    const values = [opts.username, opts.password];
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: true
    });
    let res;
    try {
        await client.connect();
        res = await client.query(text, values);
        await client.end();
    }
    catch (error) {
        return {
            success: false,
            token: null,
            message: error
        };
    }
    if (res.rows.length > 0) {
        const payload = {
            user: res.rows[0]
        };
        const token = jsonwebtoken_1.sign(payload, process.env.MSCOMP, {
            expiresIn: 1440
        });
        return {
            success: true,
            token: token
        };
    }
    else {
        return {
            success: false,
            token: null,
            message: 'User doesn\'t exists'
        };
    }
}
exports.checkAuthentication = checkAuthentication;
async function registerUser(opts) {
    const text = 'SELECT username FROM users WHERE username = $1 and password = $2';
    const values = [opts.username, opts.password];
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: true
    });
    let res;
    try {
        await client.connect();
        res = await client.query(text, values);
        await client.end();
    }
    catch (error) {
        return {
            success: false,
            token: null,
            message: error
        };
    }
    if (res.rows.length > 0) {
        return {
            success: false,
            token: null,
            message: 'User already exists in DB!'
        };
    }
    else {
        const text = 'INSERT INTO users VALUES($1,$2)';
        const values = [opts.username, opts.password];
        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: true
        });
        try {
            await client.connect();
            res = await client.query(text, values);
            await client.end();
        }
        catch (error) {
            return {
                success: false,
                token: null,
                message: error
            };
        }
        return {
            success: true,
            token: null,
            message: 'User was successfully registered. Now you can try logging in with your new username and password.'
        };
    }
}
exports.registerUser = registerUser;
