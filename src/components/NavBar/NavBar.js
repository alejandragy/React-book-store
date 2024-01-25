import { NavLink, Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

import bookStoreLogo from './img/book-store-logo.png';
import NavCategories from '../NavCategories/NavCategories';


const NavBar = () => {

    return (
        <nav className='shadow-lg'>
            <div className='flex items-center justify-between pr-6 shadow-lg bg-violet-600'>
                <h1 className='hidden'>Book-store</h1>
                <div className='flex items-center gap-10'>
                    <Link to='/' className='flex justify-between items-center  pl-4 pr-4 pt-4 pb-4 rounded-r-3xl bg-white lg:pr-12 lg:pl-12'>
                        <img src={bookStoreLogo} alt='logo' className='h-6' />
                    </Link>
                        <NavCategories />
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;