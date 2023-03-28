import { useEffect, FC, useState } from "react"
import api from "../../services/api"
import { IProduct } from "../../models/IProduct"
import Card from "../UI/card/card"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import { fetchProducts } from "store/reducers/Product/ActionProduct"
interface ProductCardsProps{
    categoryId?:string | undefined
}
const ProductCards:FC<ProductCardsProps> = ({categoryId}) =>{
    const {products} = useAppSelector(state=>state.productReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts(categoryId))
    }, [categoryId])
    return(
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between', margin:'20px 0 0 30px'}}>
            {
                products.map((item,index)=>
                    <Card key={`product card ${index}`} image={item.image} title={item.name} content={item.description} price={item.price}/>
                )
            }
        </div>
    )
}
export default ProductCards