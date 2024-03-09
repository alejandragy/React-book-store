import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

import CartItem from '../CartItem/CartItem';
import Checkout from '../Checkout/Checkout';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className='w-full h-screen p-10 justify-center gap-10 flex-wrap md:mb-6'>
                <div className='mb-10 gap-8 flex flex-col items-center'>
                    <h1>No hay items en el carrito</h1>
                    <Link to='/' className='w-80 p-2 pl-6 pr-6 bg-violet-600 text-white text-center rounded-xl text-sm'>VER PRODUCTOS</Link>
                </div>

                <div className='flex flex-col'>
                    <Checkout />
                    <button onClick={() => clearCart()} className='mt-2 text-gray-500 hover:text-red-600'>vaciar carrito</button>
                </div>
            </div>

        )
    }

    return (
        <div className=' w-full p-10 justify-center gap-10 flex-wrap'>
            <div className='mb-4 flex-col items-center gap-8 max-h-[450px] overflow-y-scroll'>
                {cart.map(p => <CartItem key={p.id} {...p} />)}
            </div>

            <div className='flex flex-col'>
                <Checkout />
                <button onClick={() => clearCart()} className='mt-2 text-gray-500 hover:text-red-600'>vaciar carrito</button>
            </div>
        </div>
    )
}

export default Cart;