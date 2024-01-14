import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';

import CartItem from '../CartItem/CartItem';

const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext);

    if (totalQuantity === 0){
        return (
            <div className='mt-10 gap-8 flex flex-col items-center'>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='w-80 p-2 pl-6 pr-6 bg-violet-600 text-white text-center rounded-2xl text-sm'>VER PRODUCTOS</Link>
            </div>
        );
    };

    return (
        <div className='flex flex-col items-center gap-8 mt-10'>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <div className='flex flex-col gap-10 md:w-80'>
                <div className='flex text-2xl'>
                    <h3 className='text-violet-600 w-24 md:w-80'>TOTAL</h3>
                    <p className=''>${total}</p>
                </div>
            <Link to='/checkout' className='w-full p-2 pl-6 pr-6 bg-violet-600 text-white rounded-2xl text-sm text-center'>INICIAR COMPRA</Link>
            <button onClick={()=> clearCart()} className='text-gray-500'>vaciar carrito</button>
            </div>
        </div>
    );
};

export default Cart;