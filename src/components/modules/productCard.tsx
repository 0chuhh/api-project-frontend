import { FC, useState } from "react"
import Card from "../UI/card/card"
import { IProduct } from "models/IProduct"
import { useAppDispatch } from "hooks/redux"
import { cartSlice } from "store/reducers/cart/CartSlice"
import { Alert, Snackbar } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteProduct } from "store/reducers/product/ActionProduct"
interface ProductCardProps {
    item: IProduct,
    canDelete?: boolean
}
const ProductCard: FC<ProductCardProps> = ({ item, canDelete=false }) => {
    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false);

    const addItem = () => {
        dispatch(cartSlice.actions.cartAddItem(item))
        handleClick()
    }

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const removeProduct = (id: number) => {
        dispatch(deleteProduct(id))
    }
    return (
        <>
            <Card onClick={addItem} buttonName="В корзину" image={item.image} title={item.name} content={item.description}>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <h3 className="price">₽{item.price}</h3>
                {canDelete &&
                    <div onClick={() => removeProduct(item.id)} style={{width:'25px', padding:'5px', minWidth:'unset'}}  className="button">
                            <DeleteIcon style={{color:'#fff'}} />
                    </div>
                }
                </div>
            </Card>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    <div>{item.name} успешно добавлен в корзину</div>
                </Alert>
            </Snackbar>
        </>
    )
}
export default ProductCard