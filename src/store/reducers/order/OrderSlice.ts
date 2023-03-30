import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IOrder } from "models/IOrder";

interface OrdersState{
    orders: IOrder[];
    isLoading: boolean;
    error:string;
}

const initialState:OrdersState = {
    orders:[],
    isLoading:false,
    error:''
}

export const orderSlice = createSlice({
    name:'orders',
    initialState,
    reducers:{
        ordersFetching(state){
            state.isLoading = true;
        },
        ordersFetchingSucces(state, action: PayloadAction<IOrder[]>){
            state.isLoading = false;
            state.orders = action.payload
        },
        ordersFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export default orderSlice.reducer