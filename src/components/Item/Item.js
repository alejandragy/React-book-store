import { Link } from "react-router-dom";


const Item = ({ id, name, img, price, stock }) => {

    return (
        <article className="w-64 shadow-lg p-4 border-b-4 border-violet-600">
            <picture>
                <img src={img} alt={name} className="w-full h-80" />
            </picture>
            <header className="p-2">
                <h2 className="h-12 text-md text-gray-700">{name}</h2>
            </header>
            <section className="pl-2">
                <p className="text-xl font-bold">${price}</p>
            </section>
            <footer className="flex mt-6 mb-2 justify-center gap-4 ">
                <Link to={`/item/${id}`} className="p-2 pl-6 pr-6 bg-slate-100 rounded-2xl text-sm">DETALLES</Link>
                <button className="p-2 pl-6 pr-6 bg-violet-600 text-white rounded-2xl text-sm">COMPRAR</button>
            </footer>
        </article>
    )
}

export default Item;
