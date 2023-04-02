import { AppDispatch } from "store";
import { productsSlice } from "./ProductSlice";
import api from 'services/api'


export const fetchProducts = (category?:string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productsSlice.actions.productsFetching())
        const products = await api.products.getProducts(category)
        dispatch(productsSlice.actions.productsFetchingSucces(products))
    } catch (error) {
        dispatch(productsSlice.actions.productsFetchingError((error as Error).message))
    }
}

export const postProducts = (name:string, description:string, category:number, price:string, image?:File) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productsSlice.actions.productsFetching())
        const {data:product} = await api.products.postProduct(name, description, category,price, image)
        dispatch(productsSlice.actions.addProductFetchingSucces(product))
    } catch (error) {
        dispatch(productsSlice.actions.productsFetchingError((error as Error).message))
    }
}

export const deleteProduct = (id:number) => async (dispatch: AppDispatch) =>{
    try {
        dispatch(productsSlice.actions.productsFetching())
        await api.products.deleteProduct(id)
        dispatch(productsSlice.actions.deleteProductSucces(id))
        
    } catch (error) {
        dispatch(productsSlice.actions.productsFetchingError((error as Error).message))
    }
}