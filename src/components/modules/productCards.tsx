import { useEffect, FC, useState } from "react"
import api from "../../services/api"
import { IProduct } from "../../models/IProduct"
import Card from "../UI/card/card"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import { fetchProducts } from "store/reducers/product/ActionProduct"
import { cartSlice } from "store/reducers/cart/CartSlice"
interface ProductCardsProps{
    categoryId?:string | undefined
}
const ProductCards:FC<ProductCardsProps> = ({categoryId}) =>{
    const {products} = useAppSelector(state=>state.productReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts(categoryId))
    }, [categoryId])

    const addItem = (item:IProduct) => {
        dispatch(cartSlice.actions.cartAddItem(item))
    }
    return(
        <div className="card-list">
            {
                products.map((item,index)=>
                    <Card onClick={()=>addItem(item)} key={`product card ${index}`} image={item.image} title={item.name} content={item.description} price={item.price}/>
                )
            }
        </div>
    )
}
export default ProductCards