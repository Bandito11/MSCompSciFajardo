import { Router, Request, Response } from 'express';
import { getLatestProducts } from './catalog.module';

const router = Router();

router.get('/', catalog);

async function catalog(req: Request, res: Response) {
    try {
        const products = await getLatestProducts();
        res.send(products);
        
    } catch (error) {
        res.send(error);
    }
}

module.exports = router;