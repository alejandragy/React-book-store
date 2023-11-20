import CartWidget from '../CartWidget/CartWidget';

import bookStoreLogo from './img/book-store-logo.png';

const NavBar = () => {
    return (
      <nav className='flex items-center justify-between shadow-lg bg-violet-600'>
            <h1 className='hidden'>Book-store</h1>
            <div className='flex justify-between items-center  pl-4 pr-4 pt-4 pb-4 rounded-r-3xl bg-white lg:pr-12 lg:pl-12'>
                <img src={bookStoreLogo} alt='logo' className='h-6' />
                
            </div>
            <div className='flex lg:w-10/12 h-14 pl-6 pr-6 items-center justify-between'>
                <div className='hidden lg:flex gap-10 items-center'>
                <button className='text-white'>Descuentos</button>
                <button className='text-white'>Libros</button>
                <button className='text-white'>Contacto</button>
                </div>
                
                <CartWidget/>
            </div>

            
        </nav>
    )
}

export default NavBar;