import axios from "../axios";

const config = {
    headers: {

        'Content-Type': 'application/json;charset=utf-8',
        'Accept': '/*/'
    },
};

const endpoints = {
    getProducts: (category?: number) => axios.get(`products/`, {
        params:{
            category
        }
    })
};

export default endpoints;