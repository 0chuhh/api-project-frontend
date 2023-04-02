import MyAccordion from 'components/UI/accordion/myAccordion'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { useEffect, useLayoutEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { IsAuthentificted } from 'services/utils/isAuthentificated'
import { fetchOrders } from 'store/reducers/order/ActionOrder'

const Profile = () => {
    const dispath = useAppDispatch()
    const { user } = useAppSelector(state => state.userReducer)
    const { orders } = useAppSelector(state => state.ordersSlice)
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (event: React.SyntheticEvent, isExpanded: boolean, panel: string) => {
            setExpanded(isExpanded ? panel : false);
        };
    useLayoutEffect(() => {
        if (IsAuthentificted()) {
            dispath(fetchOrders())
        }
    }, [user])

    useEffect(()=>{
        setExpanded(orders.length > 0 && `panel${orders[0].id}`);
        console.log('render')
    },[orders])

    if (!IsAuthentificted()) return <Navigate to="/" replace />
    return (
        <div className='container'>
            <h1>{user?.username} - мои заказы</h1>
            {
                orders.length ? orders.map((order, index) =>
                    <MyAccordion key={'order'+index} handleChange={(e,isExpanded)=>handleChange(e, isExpanded, `panel${order.id}`)} expanded={expanded === `panel${order.id}`} title={`${order.id} - ${order.date_create.split("T")[0]}`}>
                        <table className='cart-table' style={{ marginTop: 0 }}>
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
                                    order?.order_details?.map((item, index) =>
                                        <tr key={'order tr' + index} className='cart-table-row'>

                                            <td className='column'>
                                                <div className="cart-item-image" style={{ backgroundImage: `url(http://127.0.0.1:8081${item.product.image})` }} />

                                            </td>
                                            <td className='column'>{item.product.name}
                                            </td>
                                            <td className='column'>₽{item.product.price}
                                            </td>
                                            <td className='column'>
                                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                    <div style={{ border: 'solid black 1px', display: 'flex', borderRadius: '3px' }}>
                                                        <div className="count" style={{ background: '#fff', width: '25px' }}>{item.count}</div>
                                                    </div>

                                                </div>
                                            </td>

                                            <td className='column'>₽{item.count * item.product.price}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </MyAccordion>
                )
                    :
                    <h4>
                        У вас пока нет совершенных заказов
                    </h4>
            }
        </div>
    )
}

export default Profile