import { IProduct } from "models/IProduct";
import { IUser } from "../../../models/IUser";
import axios from "../axios";
import Cookies from 'js-cookie';
import { IOrder } from "models/IOrder";
const headers = {

    'Content-Type': 'application/json;charset=utf-8',
    'Accept': '/*/'
}


const endpoints = {

    createOrder: (delivery: number, pay: number, number: string, total_sum: number, products:IProduct[]) => axios.post('orders/', {
        delivery,
        pay,
        number,
        total_sum,
        products
    }, {
        headers: {
            "Authorization": Cookies.get('token')
        },

    }),
    getMyOrders: ()=>axios.get<IOrder[]>('orders/my_orders/')
    

};

export default endpoints;