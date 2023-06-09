import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/user/UserSlice'
import categoryReducer from './reducers/category/CategorySlice'
import productReducer from './reducers/product/ProductSlice'
import cartReducer from './reducers/cart/CartSlice'
import ordersSlice from './reducers/order/OrderSlice'
const rootReducer = combineReducers({
    userReducer,
    categoryReducer,
    productReducer,
    cartReducer,
    ordersSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']