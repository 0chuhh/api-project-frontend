import logo from '../../assets/logo.svg'
import cart from '../../assets/cart-icon.svg'
import { Link, Outlet } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <div style={{ background: '#fff', width: '100%', height: '130px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 1px 5px 0px rgba(0,0,0,0.2)' }}>
            <div className="logo" style={{paddingLeft:'20px'}}>
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

            <div className='cart-icons' style={{ display: 'flex', alignItems: 'center', paddingRight:'20px' }}>
                <div className="divider" style={{ height: '20px', width: '1px', background: '#e5e5e5', marginLeft: '23px', marginTop: '5px', marginRight: '23px' }}>
                </div>

                <div className="cart" >
                    <img src={cart} alt="" style={{ maxHeight: '50px' }} />
                </div>
            </div>
        </div>
        <main>
            <Outlet/>
        </main>
        </div>
    )
}
export default Header