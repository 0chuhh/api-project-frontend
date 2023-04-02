import { useParams } from "react-router-dom"
import Categories from "components/UI/categories/categories"
import ProductCards from "components/modules/productCards"
import { useAppSelector } from "hooks/redux"
import React,{useMemo} from "react"
const Menu = () => {
    const { categoryId } = useParams()
    const {categories} = useAppSelector(state=>state.categoryReducer)
    return (
        <div className="container" style={{display:'flex'}}>
            <Categories items={categories}/>
            <ProductCards categoryId={categoryId}/>
        </div>
    )
}
export default Menu