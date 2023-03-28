import { useParams } from "react-router-dom"
import Categories from "../components/UI/categories/categories"
import ProductCards from "../components/modules/productCards"
import { useAppSelector } from "../hooks/redux"

const Menu = () => {
    const { categoryId } = useParams()
    const {categories} = useAppSelector(state=>state.categoryReducer)
        
    return (
        <div style={{display:'flex', padding:'0 20%  0 20% '}}>
            <Categories items={categories}/>
            <ProductCards categoryId={categoryId}/>
        </div>
    )
}
export default Menu