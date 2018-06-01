import { Router, Request, Response } from 'express';
import { updateProfile } from './profile.module';
import { IUserProfile } from '../common';

const router = Router();

router.put('/', profile);

async function profile(req: Request, res: Response) {
    const profile: IUserProfile = {
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
            type: <string>req.body.ccType
        }
    };
    try {
        const response = await updateProfile(profile);
        res.send(response);

    } catch (error) {
        res.send(error);
    }
}

module.exports = router;