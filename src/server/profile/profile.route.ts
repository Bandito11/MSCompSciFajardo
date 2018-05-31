import { Router, Request, Response } from 'express';
import { updateProfile } from './profile.module';
import { IUserProfile } from '../common';

const router = Router();

router.put('/', profile);

async function profile(req: Request, res: Response) {
    let body;
    for (const prop in req.body) {
        body = JSON.parse(prop);
        break;
    }
    const profile: IUserProfile = {
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
            number: parseInt(<string>req.body.ccNumber),
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