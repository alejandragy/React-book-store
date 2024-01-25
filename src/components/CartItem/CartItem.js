import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

import tachito from './img/tachito.png';

const CartItem = ({ title, price, id, quantity, img }) => {

    const { removeItem } = useContext(CartContext)


    return (
        <div className='flex flex-col items-center w-56 pb-6 gap-12 border-b-2 border-slate-100 md:w-full md:flex-row'>
            <div className="mt-6">
                <img src={img} className="h-40" />
            </div>
            <div className="flex flex-col gap-8 md:items-center md:flex-row">
                <div className="md:w-48">
                    <h2>{title}</h2>
                    <p className="text-gray-300">${price} x unidad</p>
                </div>
                <p>${price * quantity} ({quantity} U)</p>
            </div>
            <button onClick={() => removeItem(id)}><img className="w-5" src={tachito}/></button>
        </div>
    )
}

export default CartItem;