import cartEmptyImg from './img/shopping-cart-transparent.png';
import cartBooksImg from './img/shopping-cart-books-transparent.png'; //para el carrito lleno

const CartWidget = () => {
    return(
        <div className='w-12 flex justify-end items-center gap-1 lg:w-24'>
            <img src={cartEmptyImg} alt="cart-empty" className='w-8'/>
            <p>0</p>
        </div>
    )
}

export default CartWidget;