import { useAppDispatch, useAppSelector } from "hooks/redux"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { IsAuthentificted } from "services/utils/isAuthentificated"
import api from 'services/api'
import { cartSlice } from "store/reducers/cart/CartSlice"
import { Alert, Snackbar } from "@mui/material"
const CartOrderFrom = () => {
    const [open, setOpen] = useState(false);
    const [isAuthentificted, setIsAuthentificted] = useState<boolean>(IsAuthentificted())
    const [paymentMethod, setpaymentMethod] = useState<number>()
    const [deliveryMethod, setDeliveryMethod] = useState<number>()
    const [phone, setPhone] = useState<string>()

    const { user } = useAppSelector(state => state.userReducer)
    const { totalSum, products } = useAppSelector(state => state.cartReducer)

    const dispatch = useAppDispatch()

    useEffect(() => {
        setIsAuthentificted(IsAuthentificted())
    }, [user])

    const createOrder = () => {
        if (deliveryMethod && paymentMethod && phone) {
            api.orders.createOrder(deliveryMethod, paymentMethod, phone, totalSum, products)
            dispatch(cartSlice.actions.cartClear())
            handleClick()
        }

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
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '500px', position: 'relative' }}>
            <div className="cart-result" style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '500px', position: 'fixed', marginTop: '120px' }}>
                <h2 className="title" style={{ margin: 0 }}>Итог корзины</h2>
                <div className="cart-sum" style={{ display: 'flex', alignItems: 'center', gap: '10px', maxHeight: '60px' }}>
                    <h4 className="cart-sum-title" style={{ maxWidth: '100px', }}>Итоговая сумма:</h4>
                    <div className="cart-sum-price">₽{totalSum}</div>
                </div>
                <div className="divider"></div>
                <div className="pay">
                    <select value={paymentMethod} onChange={(e) => setpaymentMethod(Number(e.target.value))}>
                        <option selected disabled value="способ оплаты">Способ оплаты</option>
                        <option value={1}>Картой</option>
                        <option value={2}>Наличными</option>
                    </select>
                </div>
                <div className="delivery">
                    <select value={deliveryMethod} onChange={(e) => setDeliveryMethod(Number(e.target.value))}>
                        <option selected disabled value="способ доставки">Способ доставки</option>
                        <option value={1}>Курьером</option>
                        <option value={2}>Самовывоз</option>
                    </select>
                </div>
                <div className="number">
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} className='input' placeholder='Номер телефона' />
                </div>
                {
                    isAuthentificted ?
                        <div onClick={createOrder} className="button">Оформить</div>
                        :
                        <div>
                            <div style={{ marginBottom: '10px', fontSize: '14px' }}>Для оформления заказа, пожалуйста, авторизуйтесь</div>
                            <Link to='/sign-in' style={{ textDecoration: 'none', color: '#000' }}>
                                <div className="button">
                                    Войти
                                </div>
                            </Link>
                        </div>
                }
            </div>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    <div>Заказ успешно совершен, спасибо за покупку!!!</div>
                </Alert>
            </Snackbar>
        </div>
    )
}

export default CartOrderFrom