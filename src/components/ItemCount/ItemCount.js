import { useState } from 'react';



const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className='flex'>
            <div className='flex gap-6 items-center bg-slate-100 pl-4 pr-4 rounded-l-2xl'>
                <button onClick={decrement} className='font-bold'>-</button>
                <p>{quantity}</p> 
                <button onClick={increment} className='font-bold'>+</button>
            </div>
            <div>
                <button onClick={() => onAdd(quantity)} disabled={!stock} className="p-2 pl-6 pr-6 bg-violet-600 text-white rounded-r-2xl text-sm">AGREGAR AL CARRITO</button>
            </div>
        </div>
    )
}

export default ItemCount;