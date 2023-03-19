import { useEffect, FC, useState } from "react"
import api from "../../services/api"
import { Product } from "../../types/product"
import Card from "../UI/card/card"
interface ProductCardsProps{
    categoryId:number
}
const ProductCards:FC<ProductCardsProps> = ({categoryId}) =>{
    const [products, setProducts] = useState<Product[]>([])

    const getProducts = async (id?: number) => {
        console.log(id)
        let result
        return Number.isNaN(id) ? await api.products.getProducts().then(res => res.data)
            : await api.products.getProducts(id).then(res => res.data)
    }

    useEffect(() => {
        getProducts(categoryId).then(e => setProducts(e))
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