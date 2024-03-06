import { NavLink, Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

import bookStoreLogo from './img/book-store-logo.png';


const NavBar = () => {

    return (
        <nav className='shadow-lg '>
            <div className='flex items-center justify-between pr-6 shadow-lg bg-white'>
                <h1 className='hidden'>Book-store</h1>
                <Link to='/' className='px-6 py-4'>
                    <img src={bookStoreLogo} alt='logo' className='h-6' />
                </Link>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;