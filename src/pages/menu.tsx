import React, { FC, useEffect, useState } from "react"
import api from '../services/api'
import { useParams } from "react-router-dom"
import Categories from "../components/UI/categories/categories"
import { Category } from "../types/category"
import ProductCards from "../components/modules/productCards"
const Menu = () => {
    const { categoryId } = useParams()
    const [categories, setCategories] = useState<Category[]>([])

    const getCategories = async () => {
        let result
        return await api.categories.getCategories().then(res => res.data)
    }

    
    useEffect(() => {
        getCategories().then(e => setCategories(e))
    }, [])

    
    return (
        <div style={{display:'flex', padding:'0 20%  0 20% '}}>
            <Categories items={categories}/>
            <ProductCards categoryId={Number(categoryId)}/>
        </div>
    )
}
export default Menu