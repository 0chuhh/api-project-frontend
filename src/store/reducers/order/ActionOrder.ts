import { AppDispatch } from "store";
import { orderSlice } from "./OrderSlice";
import api from 'services/api'


export const fetchOrders = (category?:string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(orderSlice.actions.ordersFetching())
        const {data: orders} = await api.orders.getMyOrders()
        dispatch(orderSlice.actions.ordersFetchingSucces(orders))
    } catch (error) {
        dispatch(orderSlice.actions.ordersFetchingError((error as Error).message))
    }
}