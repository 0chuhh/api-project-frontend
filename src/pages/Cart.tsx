import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IProduct } from 'models/IProduct';
import { cartSlice } from 'store/reducers/cart/CartSlice';
import { IsAuthentificted } from 'services/utils/isAuthentificated';
import { Link } from 'react-router-dom';
import CartOrderFrom from 'components/modules/cartOrderForm';
const Cart = () => {
    
    const { products, totalSum } = useAppSelector(state => state.cartReducer)
    const dispatch = useAppDispatch()
    const substructItem = (item: IProduct) => {
        dispatch(cartSlice.actions.cartSubstruct(item))
    }

    const addItem = (item: IProduct) => {
        dispatch(cartSlice.actions.cartAddItem(item))
    }

    
    return (
        <div className="container" style={{ display: 'flex', position: 'relative', }}>
            <div className="table-container">
                <table className='cart-table'>
                    <thead className='table-head'>
                        <tr>
                            <th className='column'></th>
                            <th className='column'>Блюдо</th>
                            <th className='column'>Цена</th>
                            <th className='column'>Количество</th>
                            <th className='column'>Всего</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((item, index) =>
                                <tr className='cart-table-row'>

                                    <td className='column'>
                                        <div className="cart-item-image" style={{ backgroundImage: `url(${item.image})` }} />

                                    </td>
                                    <td className='column'>{item.name}
                                    </td>
                                    <td className='column'>₽{item.price}
                                    </td>
                                    <td className='column'>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ border: 'solid black 1px', display: 'flex', borderRadius: '3px' }}>
                                                <div onClick={() => substructItem(item)} className="minus" style={{ cursor: 'pointer', background: 'lightGray', width: '25px', borderRadius: '3px' }}><RemoveIcon style={{ width: '15px' }} /></div>
                                                <div className="count" style={{ background: '#fff', width: '25px' }}>{item.count}</div>
                                                <div onClick={() => addItem(item)} className="plus" style={{ cursor: 'pointer', background: 'lightGray', width: '25px', borderRadius: '3px', }}><AddIcon style={{ width: '15px' }} /></div>
                                            </div>

                                        </div>
                                    </td>

                                    <td className='column'>₽{item.count * item.price}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <CartOrderFrom/>

        </div>
    )
}
export default Cart