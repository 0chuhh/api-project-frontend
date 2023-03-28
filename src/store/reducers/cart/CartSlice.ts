import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "models/IProduct";
import { element } from "prop-types";


interface CartState {
    products:IProduct[];
    totalSum:number;
    isLoading:boolean;
    error:string;
}

const initialState: CartState = {
    products:[],
    totalSum:0,
    isLoading:false,
    error: ''
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        cartAddItem(state, action:PayloadAction<IProduct>){
            let currentItem = state.products.find(element=>element.id == action.payload.id)
            if(currentItem){
                state.products = state.products.map(element=>(element.id == action.payload.id? {...element, count:element.count+1} : element))
                state.totalSum += action.payload.price
            }else{
                state.products.push(action.payload)
                state.totalSum += action.payload.price
            }
        },
        cartRemoveItem(state, action:PayloadAction<IProduct>){
            let currentItem = state.products.find(element=>element.id == action.payload.id)
            if(currentItem){
                state.totalSum -= action.payload.price*currentItem.count
                state.products=state.products.reduce((acc:IProduct[], element:IProduct)=> {
                    if(element.id !== action.payload.id) acc.push(element);
                    return acc
                },[])
            }
        }
    }
})

export default cartSlice.reducer