import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, name, img, category, author, description, price, stock }) => {
    return (
        <article className='flex flex-wrap justify-center gap-4 m-2 md:p-0'>
            <picture>
                <img src={img} alt={name} className='h-500' />
            </picture>
            <div className='md:w-3/5'>
                <header>
                    <h2 className='text-2xl'>{name}</h2>
                </header>
                <section className='mt-4 flex flex-col gap-4'>
                    <p className='font-bold text-violet-600 text-2xl'>${price}</p>
                    <div>
                        <p className='text-gray-500 text-sm'>CATEGORÍA</p>
                        <p>{category}</p>
                    </div>
                    <div>
                        <p className='text-gray-500 text-sm'>AUTOR</p>
                        <p>{author}</p>
                    </div>
                    <div>
                        <p className='text-gray-500 text-sm'>DESCRIPCIÓN</p>
                        <p className='h-52 overflow-y-auto'>{description}</p>
                    </div>
                </section>
                <footer className='mt-4'>
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada', quantity)} />
                </footer>
            </div>
        </article>
    )
}

export default ItemDetail;