import React, { useEffect, useLayoutEffect, useState } from 'react';
import logo from '../assets/logo.svg'
import cart from '../assets/cart-icon.svg'
import { Link, Outlet } from "react-router-dom";
import { IsAuthentificted } from '../services/utils/isAuthentificated';
import { CookieChangeListener } from '../services/utils/cookieChangeListener';
import { Logout } from '../services/utils/logout';
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getMe } from '../store/reducers/user/ActionAuth';
import { fetchCategories } from '../store/reducers/category/ActionCategory';
import { PopUp } from 'components/UI/pop-up/popUp';
import { CartPopUp } from 'components/modules/cartPopUp';
import { ClickAwayListener } from '@mui/base';
import { Badge } from '@mui/material';
import { fetchOrders } from 'store/reducers/order/ActionOrder';

const Header = () => {

    const { products, totalSum, productsCount } = useAppSelector(state => state.cartReducer)

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    const navigate = useNavigate();
    const { user } = useAppSelector(state => state.userReducer)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getMe())

        dispatch(fetchCategories())
    }, [])



    const onLogoutClick = () => {
        dispatch(Logout())
        navigate('/')
    }

    const openCart = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : e.currentTarget)
    }


    return (
        <div>
            <div style={{ background: '#fff', width: '100%', height: '130px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 1px 5px 0px rgba(0,0,0,0.2)' }}>
                <div className="logo" style={{ paddingLeft: '20px' }}>
                    <img src={logo} style={{ maxHeight: '100px' }} />
                </div>

                <div className='menu' style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '20px' }}>
                    <div className='menu-item'>
                        <Link to={'/'} style={{ textDecoration: 'none', color: '#000' }}>
                            Главная
                        </Link>
                    </div>
                    <div className='menu-item'>
                        <Link to={'/menu'} style={{ textDecoration: 'none', color: '#000' }}>
                            Меню
                        </Link>
                    </div>
                    <div className='menu-item'>
                        <Link to={'/cart'} style={{ textDecoration: 'none', color: '#000' }}>
                            Корзина
                        </Link>
                    </div>
                    <div className='menu-item'>
                        <Link to={'/delivery-and-pay'} style={{ textDecoration: 'none', color: '#000' }}>
                            Доставка и оплата
                        </Link>
                    </div>
                    <div className='menu-item'>
                        <Link to={'/about'} style={{ textDecoration: 'none', color: '#000' }}>
                            О нас
                        </Link>
                    </div>


                </div>

                <div className='cart-icons' style={{ display: 'flex', alignItems: 'center', paddingRight: '20px' }}>
                    <div className="divider" style={{ height: '20px', width: '1px', background: '#e5e5e5', marginLeft: '23px', marginTop: '5px', marginRight: '23px' }}>
                    </div>


                    <PopUp onClick={openCart} iconSrc={cart} badge={productsCount} anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
                        <CartPopUp products={products} totalSum={totalSum} />
                    </PopUp>
                    <div className="divider" style={{ height: '20px', width: '1px', background: '#e5e5e5', marginLeft: '23px', marginTop: '5px', marginRight: '23px' }}>
                    </div>

                    {
                        IsAuthentificted() ?
                            <>
                                <div>
                                    {
                                        user?.roles?.find(role => role.name === 'manager') ?
                                            <Badge badgeContent={'M'} color='primary'>
                                                <Link to='/profile' style={{ textDecoration: 'none', color: '#000' }}>
                                                    {user?.username}
                                                </Link>
                                            </Badge>
                                            :
                                            <Link to='/profile' style={{ textDecoration: 'none', color: '#000' }}>
                                                {user?.username}
                                            </Link>
                                    }

                                </div>
                                <div className="divider" style={{ height: '20px', width: '1px', background: '#e5e5e5', marginLeft: '23px', marginTop: '5px', marginRight: '23px' }}>
                                </div>
                                <div style={{ cursor: 'pointer' }} onClick={onLogoutClick}>Выйти</div>
                            </>
                            : <>
                                <div className="reg">
                                    <Link to={'/sign-up'} style={{ textDecoration: 'none', color: '#000' }}>
                                        Регистрация
                                    </Link>
                                </div>

                                <div className="divider" style={{ height: '20px', width: '1px', background: '#e5e5e5', marginLeft: '23px', marginTop: '5px', marginRight: '23px' }}>
                                </div>

                                <div className="auth">
                                    <Link to={'/sign-in'} style={{ textDecoration: 'none', color: '#000' }}>
                                        войти
                                    </Link>
                                </div></>
                    }
                </div>
            </div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
export default Header