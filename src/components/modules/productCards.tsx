import { useEffect, FC, useState } from "react"
import api from "../../services/api"
import { IProduct } from "../../models/IProduct"
import Card from "../UI/card/card"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import { fetchProducts } from "store/reducers/product/ActionProduct"
import { cartSlice } from "store/reducers/cart/CartSlice"
import { Alert, Snackbar } from "@mui/material"
interface ProductCardsProps{
    categoryId?:string | undefined
}
const ProductCards:FC<ProductCardsProps> = ({categoryId}) =>{
    const {products} = useAppSelector(state=>state.productReducer)
    const dispatch = useAppDispatch()

    const [open, setOpen] = useState(false);
    const [clickedItem, setClickedItem] = useState<IProduct>()

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    useEffect(() => {
        dispatch(fetchProducts(categoryId))
    }, [categoryId])

    const addItem = (item:IProduct) => {
        setClickedItem(item)
        dispatch(cartSlice.actions.cartAddItem(item))
        handleClick()
    }
    return(
        <div className="card-list">
            {
                products.map((item,index)=>
                    <Card onClick={()=>addItem(item)} key={`product card ${index}`} image={item.image} title={item.name} content={item.description} price={item.price}/>
                )
            }
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    <div>{clickedItem && clickedItem.name} успешно добавлен в корзину</div>
                </Alert>
            </Snackbar>
        </div>
    )
}
export default ProductCards