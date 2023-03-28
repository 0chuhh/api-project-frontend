import { IProduct } from "models/IProduct";
import axios from "../axios";

const config = {
    headers: {

        'Content-Type': 'application/json;charset=utf-8',
        'Accept': '/*/'
    },
};

const endpoints = {
    getProducts: (category?: string) => axios.get<IProduct[]>(`products/`, {
        params:{
            category
        }
    })
};

export default endpoints;