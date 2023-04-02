import { ICategory } from "../../../models/ICategory";
import axios from "../axios";


const endpoints = {
    getCategories: () => axios.get<ICategory[]>('products/categories/'),
    postCategories: (name:string, image?:File) => axios.post<ICategory>('products/categories/', {
        name,
        image
    }, {
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    }),
    deleteCategory: (id:number) => axios.delete(`products/categories/${id}/`)
};

export default endpoints;