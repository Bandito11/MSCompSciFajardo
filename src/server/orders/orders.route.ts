import { Router, Request, Response } from 'express';

const router = Router();

router.put('/', orders);

async function orders(req: Request, res: Response) {
    res.send('hello from orders')
}

module.exports = router;