export interface IResponse<T> {
    success: boolean,
    error,
    data: T,
    dateStamp: Date
}

export interface IUserProfile {
    username, //Primary Key
    firstName,
    middleName,
    lastName,
    address,
    state,
    city,
    country,
    zip,
    phone,
    creditCard: {
        number: number,
        type: string
    }
}