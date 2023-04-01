import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "models/IProduct";



interface CartState {
    products: IProduct[];
    totalSum: number;
    isLoading: boolean;
    error: string;
    productsCount: number;
}

const initialState: CartState = {
    products: localStorage.getItem('cart') ? (JSON.parse(localStorage?.getItem('cart')!) as CartState).products : [],
    totalSum: localStorage.getItem('cart') ? (JSON.parse(localStorage?.getItem('cart')!) as CartState).totalSum : 0,
    isLoading: false,
    error: '',
    productsCount: localStorage.getItem('cart') ? (JSON.parse(localStorage?.getItem('cart')!) as CartState).productsCount : 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartAddItem(state, action: PayloadAction<IProduct>) {
            let currentItem = state.products.find(element => element.id === action.payload.id)
            if (currentItem) {
                state.products = state.products.map(element => (element.id === action.payload.id ? { ...element, count: element.count + 1 } : element))
                state.totalSum += action.payload.price
            } else {
                state.products.push(action.payload)
                state.totalSum += action.payload.price
            }
            state.productsCount += 1
            localStorage.setItem('cart', JSON.stringify(state))
        },
        cartRemoveItem(state, action: PayloadAction<IProduct>) {
            let currentItem = state.products.find(element => element.id === action.payload.id)
            if (currentItem) {
                state.totalSum -= action.payload.price * currentItem.count
                state.productsCount -= currentItem.count
                state.products = state.products.reduce((acc: IProduct[], element: IProduct) => {
                    if (element.id !== action.payload.id) acc.push(element);
                    return acc
                }, [])
            }

            localStorage.setItem('cart', JSON.stringify(state))
        },
        cartSubstruct(state, action: PayloadAction<IProduct>) {
            let currentItem = state.products.find(element => element.id === action.payload.id)
            if (currentItem) {
                if (currentItem.count !== 1) {
                    state.totalSum -= action.payload.price
                    state.productsCount -= 1
                    currentItem.count -= 1
                } else {
                    state.totalSum -= action.payload.price * currentItem.count
                    state.productsCount -= currentItem.count
                    state.products = state.products.reduce((acc: IProduct[], element: IProduct) => {
                        if (element.id !== action.payload.id) acc.push(element);
                        return acc
                    }, [])
                }
            }

            localStorage.setItem('cart', JSON.stringify(state))
        },
        cartClear(state){
            state.products = []
            state.isLoading = false
            state.error = ''
            state.totalSum = 0
            state.productsCount = 0

            localStorage.setItem('cart', JSON.stringify(state))
        }
    }
})

export default cartSlice.reducer