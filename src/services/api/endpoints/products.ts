import { IProduct } from "models/IProduct";
import axios from "../axios";

const config = {
    headers: {

        'Content-Type': 'application/json;charset=utf-8',
        'Accept': '/*/'
    },
};

const endpoints = {
    getProducts: function(category?: string){
        const result = axios.get<IProduct[]>(`products/`, {
            params:{
                category
            }
        }).then(result=>{
            return result.data.map(item=>
                {
                    return {
                        id:item.id,
                        name:item.name,
                        description:item.description,
                        image:item.image,
                        price:item.price,
                        category:item.category,
                        count:1
                    }
                }
                )
    
        })
        return result
    }
};

export default endpoints;