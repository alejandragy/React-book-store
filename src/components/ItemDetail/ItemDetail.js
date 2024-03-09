import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ id, title, img, category, author, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id, title, price, img
        };

        addItem(item, quantity);
    };

    return (
        <article className='h-500 mt-10 mx-2 bg-white flex flex-wrap justify-around gap-4 lg:mx-20 md:flex-nowrap'>
            <div className='flex items-center'>
                <img src={img} alt={title} className='h-500' />
            </div>
            <div className='md:w-3/5 pr-6'>
                <header className='mt-2'>
                    <h2 className='text-2xl'>{title}</h2>
                </header>
                <section className='mt-4 flex flex-col gap-4'>
                    <p className='font-bold text-violet-600 text-2xl'>${price}</p>
                    <div className='flex gap-10'>
                        <div>
                            <p className='text-gray-500 text-sm'>CATEGORÍA</p>
                            <p>{category}</p>
                        </div>
                        <div>
                            <p className='text-gray-500 text-sm'>AUTOR</p>
                            <p>{author}</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-gray-500 text-sm'>DESCRIPCIÓN</p>
                        <p className='h-52 overflow-y-auto'>{description}</p>
                    </div>
                </section>
                <footer className='mt-4'>

                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className='p-2 pl-20 pr-20 bg-violet-600 text-white rounded-2xl text-sm'>TERMINAR COMPRA</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }
                </footer>
            </div>
        </article>
    )
}

export default ItemDetail;