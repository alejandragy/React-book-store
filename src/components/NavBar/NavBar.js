import CartWidget from '../CartWidget/CartWidget';

import bookStoreLogo from './img/book-store-logo.png';

const NavBar = () => {
    return (
        <nav >
            <h1 className='hidden'>Book-store</h1>
            <div className='flex justify-between pl-4 pr-4 pt-4 pb-4 lg:pr-12 lg:pl-12'>
                <img src={bookStoreLogo} alt='logo' className='h-20' />
                <CartWidget />
            </div>

            <div className='hidden lg:flex lg:gap-12 lg:pt-2 lg:pb-2 lg:pr-12 lg:pl-14 bg-slate-100 lg:items-center'>
                <button>Descuentos</button>
                <button>Libros</button>
                <button>Contacto</button>
            </div>
        </nav>
    )
}

export default NavBar;