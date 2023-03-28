import { AppDispatch } from "store";
import { productsSlice } from "./ProductSlice";
import api from 'services/api'


export const fetchProducts = (category?:string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productsSlice.actions.productsFetching())
        const {data: products} = await api.products.getProducts(category)
        dispatch(productsSlice.actions.productsFetchingSucces(products))
    } catch (error) {
        dispatch(productsSlice.actions.productsFetchingError((error as Error).message))
    }
}