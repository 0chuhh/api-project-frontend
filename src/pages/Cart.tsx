import { useAppSelector } from 'hooks/redux'
import React from 'react'

const Cart = () => {
    const { products } = useAppSelector(state => state.cartReducer)
    return (
        <div className="container">
            <table className='cart-table'>
                <thead className='table-head'>
                    <tr>
                        <th className='column-1'></th>
                        <th className='column-2'>Блюдо</th>
                        <th className='column-3'>Цена</th>
                        <th className='column-4'>Количество</th>
                        <th className='column-5'>Всего</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item, index) =>
                            <tr className='cart-table-row'>
                                
                                <td className='column-1'>
                                    <div className="cart-item-image" style={{ backgroundImage: `url(${item.image})` }} />
                                </td>
                                <td className='column-2'>{item.name}
                                </td>
                                <td className='column-4'>₽{item.price}
                                </td>
                                <td className='column-3'>{item.count}</td>

                                <td className='column-5'>₽{item.count * item.price}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Cart