import { IProduct } from "models/IProduct";
import axios from "../axios";



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
    },
    postProduct: (name:string, description:string, category:number, price:string, image?:File) => axios.post<IProduct>('products/',{
        name,
        description,
        price,
        category,
        image
    },
    {
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    }
    ),
    deleteProduct: (id:number) => axios.delete(`products/${id}/`)
};

export default endpoints;