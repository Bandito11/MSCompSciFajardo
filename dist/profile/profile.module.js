"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateProfile(opts) {
    return new Promise((resolve, reject) => {
        let response;
        response = Object.assign({}, response, { success: true, error: null, dateStamp: new Date(), data: 'User Profile was successfully updated!' });
        resolve(response);
    });
}
exports.updateProfile = updateProfile;
function getProfile(username) {
    return new Promise((resolve, reject) => {
        resolve(USER);
    });
}
exports.getProfile = getProfile;
const USER = {
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
};
