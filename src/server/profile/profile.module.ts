import { IResponse } from './../common';
import { IUserProfile } from "../common";

export function updateProfile(opts) {
    return new Promise((resolve, reject) => {
        let response: IResponse<string>;
        response = {
            ...response,
            success: true,
            error: null,
            dateStamp: new Date(),
            data: 'User Profile was successfully updated!'
        }
        resolve(response);
    });
}

export function getProfile(username) {
    return new Promise((resolve, reject) => {
        resolve(USER);
    });
}

const USER: IUserProfile = {
    username: 'stefanos',
    firstName: 'Esteban',
    middleName: 'Andres',
    lastName: 'Morales',
    address: 'Calle 123',
    city: 'ciudad321',
    state: 'PR',
    country: 'United States',
    zip: '123321',
    phone: '123456789',
    creditCard: {
        number: 6879,
        type: 'VISA'
    }
}