import { IDelivery } from "./IDelivery";
import { IOrderDetail } from "./IOrderDetail";
import { IPayment } from "./IPayment";
import { IStatus } from "./IStatus";

export interface IOrder{
    id:number,
    date_create:string,
    address?:string,
    delivery:IDelivery,
    pay:IPayment,
    status?:IStatus,
    total_sum:string,
    order_details: IOrderDetail[]
}