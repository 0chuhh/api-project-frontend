import { useAppDispatch } from "hooks/redux";
import React, {FC} from "react";
import CloseIcon from '@mui/icons-material/Close';
import { IProduct } from "models/IProduct";
import { cartSlice } from "store/reducers/cart/CartSlice";
import { Link } from "react-router-dom";

interface CartPopUpProps {
    products: IProduct[]
    totalSum: number
}

export const CartPopUp:FC<CartPopUpProps> = ({products, totalSum}) => {

    const dispatch = useAppDispatch()

    const removeItem = (item:IProduct)=>{
        dispatch(cartSlice.actions.cartRemoveItem(item))
    }

    return (
        <div className="cart-pop-up" >
            <div className="cart-products">
                {products.length>0?
                    products.map((item, index) =>
                        <div key={'cart-item ' + index} className="cart-item">
                            <div className="cart-item-image" style={{ backgroundImage: `url(${item.image})` }} />
                            <div className="cart-item-content">
                                <div className="card-item-title">{item.name}</div>
                                <div className="card-item-count-price">{item.count} x {item.price}</div>
                            </div>
                            <div onClick={()=>removeItem(item)} className="cart-item-remove"><CloseIcon /></div>

                        </div>
                    )
                    : <div style={{textAlign:'center', margin:'50px 0 50px 0'}}>В корзине пока ничего нет.</div>
                }
            </div>
            <div className="cart-total-price">
                <div className="price">Сумма: ₽{totalSum}</div>
                <Link to='/cart'><div className="button">К корзине</div></Link>
            </div>
            <div className="to-cart-button"></div>
        </div>
    )
}