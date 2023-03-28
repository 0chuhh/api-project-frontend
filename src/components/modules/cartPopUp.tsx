import { useAppDispatch, useAppSelector } from "hooks/redux";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { IProduct } from "models/IProduct";
import { cartSlice } from "store/reducers/cart/CartSlice";

export const CartPopUp = () => {
    const { products, totalSum } = useAppSelector(state => state.cartReducer)

    const dispatch = useAppDispatch()

    const removeItem = (item:IProduct)=>{
        console.log('hui')
        dispatch(cartSlice.actions.cartRemoveItem(item))
    }

    return (
        <div className="cart-pop-up" >
            <div className="cart-products">
                {
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
                }
            </div>
            <div className="cart-total-price">
                <div className="price">Сумма: ₽{totalSum}</div>
                <div className="button">К корзине</div>
            </div>
            <div className="to-cart-button"></div>
        </div>
    )
}