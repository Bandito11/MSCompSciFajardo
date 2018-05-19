import { Request, Response, NextFunction } from 'express';
import { sign, verify } from 'jsonwebtoken';
const { Client } = require('pg');


/**
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export function verifyAuthentication(req: Request, res: Response, next: NextFunction) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        verify(token, process.env.MSCOMP, (error, decoded) => {
            if (error) {
                return res.json({ success: false, message: 'Failed authentication!' });
            } else {
                res.locals.decoded = decoded;
                req.params.decoded = decoded;
                next();
            }
        });
    } else {

        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
}

export async function checkAuthentication(opts: { username, password }) {
    const text = 'Select username from users where username = $1 and password = $2';
    const values = [opts.username, opts.password];
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: true
    });
    await client.connect();
    const res = await client.query(text, values);
    await client.end();
    if (res.rows.length > 0) {
        const payload = {
            user: res.rows[0]
        };
        const token = sign(payload, process.env.MSCOMP, {
            expiresIn: 1440
        });
        return {
            success: true,
            token: token
        }

    } else {
        return {
            success: false,
            token: null,
            message: 'User doesn\'t exists'
        };
    }
}