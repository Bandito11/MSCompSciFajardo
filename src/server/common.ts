export interface IResponse <T> {
    success: boolean,
    error,
    data: T,
    dateStamp: Date
}