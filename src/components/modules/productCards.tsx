import { useEffect, FC, useState, useCallback } from "react"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import { fetchProducts } from "store/reducers/product/ActionProduct"

import ManagerMenuProducts from "./managerMenuProducts"
import React from "react"
import ProductCard from "./productCard"
interface ProductCardsProps {
    categoryId?: string | undefined
}
const ProductCards: FC<ProductCardsProps> = ({ categoryId }) => {
    const { products } = useAppSelector(state => state.productReducer)
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(fetchProducts(categoryId))
    }, [categoryId])


    
    return (
        <div className="card-list">
            {
                products.map((item, index) =>
                    <>
                        <ProductCard canDelete={user?.roles?.find(role => role.name === 'manager')&&true}  item={item} />
                        
                    </>
                )
            }

            {
                user?.roles?.find(role => role.name === 'manager') &&
                <ManagerMenuProducts />
            }
        </div>
    )
}
export default React.memo(ProductCards)