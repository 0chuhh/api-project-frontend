import { ICategory } from "../../../models/ICategory";
import axios from "../axios";

const config = {
    headers: {

        'Content-Type': 'application/json;charset=utf-8',
        'Accept': '/*/'
    },
};

const endpoints = {
    getCategories: () => axios.get<ICategory[]>('products/categories/')
};

export default endpoints;