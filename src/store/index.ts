import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/User/UserSlice'
import categoryReducer from './reducers/Category/CategorySlice'
import productReducer from './reducers/Product/ProductSlice'

const rootReducer = combineReducers({
    userReducer,
    categoryReducer,
    productReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']