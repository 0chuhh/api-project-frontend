import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../models/IProduct";

interface ProductsState {
    products: IProduct[];
    isLoading: boolean;
    error: string;
}

const initialState: ProductsState = {
    products: [],
    isLoading: false,
    error: ''
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        productsFetching(state){
            state.isLoading = true;
        },
        productsFetchingSucces(state, action: PayloadAction<IProduct[]>){
            state.isLoading = false;
            state.products = action.payload
        },
        productsFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload
        },
        addProductFetchingSucces(state, action: PayloadAction<IProduct>){
            state.isLoading = false;
            state.products.push(action.payload)
        }
    }
})
export default productsSlice.reducer