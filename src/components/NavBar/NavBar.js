import { NavLink, Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

import bookStoreLogo from './img/book-store-logo.png';


const NavBar = () => {
    return (
        <nav className='shadow-lg'>
            <div className='flex items-center justify-between  shadow-lg bg-violet-600'>
                <h1 className='hidden'>Book-store</h1>
                <Link to='/' className='flex justify-between items-center  pl-4 pr-4 pt-4 pb-4 rounded-r-3xl bg-white lg:pr-12 lg:pl-12'>
                    <img src={bookStoreLogo} alt='logo' className='h-6' />
                </Link>
                <CartWidget />
            </div>

            <div className='flex flex-col h-56 px-6 pb-6 gap-10 md:gap-5 md:h-32'>
                <p className='font-bold text-violet-600 mt-2 '>Categorías</p>
                <div className='flex flex-wrap gap-10 items-center'>
                    <NavLink to={`/category/Ciencia`} className={({ isActive }) => isActive ? 'text-violet-600' : 'text-black'}>Ciencia</NavLink>
                    <NavLink to={`/category/Filosofía`} className={({ isActive }) => isActive ? 'text-violet-600' : 'text-black'}>Filosofía</NavLink>
                    <NavLink to={`/category/Narrativa`} className={({ isActive }) => isActive ? 'text-violet-600' : 'text-black'}>Narrativa</NavLink>
                    <NavLink to={`/category/Poesía`} className={({ isActive }) => isActive ? 'text-violet-600' : 'text-black'}>Poesía</NavLink>
                    <NavLink to={`/category/Psicología`} className={({ isActive }) => isActive ? 'text-violet-600' : 'text-black'}>Psicología</NavLink>
                </div>
            </div>


        </nav>
    )
}

export default NavBar;