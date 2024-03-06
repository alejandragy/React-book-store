import cartEmptyImg from './img/shopping-cart-transparent.png';
import cartBooksImg from './img/shopping-cart-books-transparent.png';

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to='/cart' className='fixed right-2 mt-2 w-14 h-10 flex justify-center items-center gap-1.5 bg-violet-700 rounded-xl'>
            <img src={ totalQuantity > 0? cartBooksImg : cartEmptyImg } alt="cart" className='w-6' />
            <p className='text-white'>{totalQuantity}</p>
        </Link>
    )
}

export default CartWidget;