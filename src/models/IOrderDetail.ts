import { IProduct } from "./IProduct";

export interface IOrderDetail{
    id:number,
    product:IProduct,
    count:number,
}