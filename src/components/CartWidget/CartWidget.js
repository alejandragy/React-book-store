import cartEmptyImg from './img/shopping-cart-transparent.png';
import cartBooksImg from './img/shopping-cart-books-transparent.png'; //para el carrito lleno

const CartWidget = () => {
    return(
        <div className='w-14 h-10 flex justify-center items-center gap-1.5 bg-violet-700 rounded-xl'>
            <img src={cartEmptyImg} alt="cart-empty" className='w-6'/>
            <p className='text-white'>0</p>
        </div>
    )
}

export default CartWidget;