import { IResponse } from './../common';

export function getLatestProducts(): Promise<IResponse<IProduct[]>> {
    return new Promise((resolve, reject) => {
        let apiResponse: IResponse<IProduct[]>;
        apiResponse = {
            ...apiResponse,
            success: true,
            error: null,
            dateStamp: new Date(),
            data: PRODUCTS
        };
        resolve(apiResponse);
    });
}

interface IProduct {
    id, //Primary Key
    title, // 19 characters
    description, //32 characters
    src,
    price: number,
    cargoEnvio
}

const PRODUCTS: IProduct[] = [{
    id: 'z3498',
    title: 'Hawaiian Shirt',
    description: 'Hawaiian shirt for adults',
    src: 'assets/custom/shirt.jpg',
    price: 9.99,
    cargoEnvio: 65.95
},
{
    id: 'z089',
    title: 'Polo Shirt',
    description: 'Polo shirt for adults',
    src: 'assets/custom/polo.jpg',
    price: 19.99,
    cargoEnvio: 27.83
},
{
    id: 'z2314',
    title: 'Carpet styled pants',
    description: 'Office pants for adult females',
    src: 'assets/custom/pants.jpg',
    price: 39.99,
    cargoEnvio: 36.84
},
{
    id: 'z9876',
    title: 'Khakhi Pants',
    description: 'Office pants for adult males',
    src: 'assets/custom/pants2.jpg',
    price: 22.99,
    cargoEnvio: 31.42
},
{
    id: 'z345',
    title: 'Office comfy shoes',
    description: 'Shoes made for the office woman!',
    src: 'assets/custom/shoes.jpg',
    price: 63.99,
    cargoEnvio: 84.45
},
{
    id: 'z43',
    title: 'Tennis shoes',
    description: 'Shoes for running',
    src: 'assets/custom/shoes2.jpg',
    price: 78.99,
    cargoEnvio: 97.89
},
{
    id: 'z2',
    title: 'Dress shoes',
    description: 'Leather and handmade',
    src: 'assets/custom/shoes3.jpg',
    price: 41.99,
    cargoEnvio: 12.89
}];
