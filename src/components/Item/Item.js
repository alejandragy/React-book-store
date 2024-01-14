import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";



const Item = ({ id, title, img, price, stock }) => {

    const { addItem } = useContext(CartContext);

    const addSingleProduct = () => {
        if (stock > 0) {
            const item = {
                id, title, price, img
            };
            addItem(item, 1);
        }
    }

    return (
        <article className="w-64 shadow-lg p-4 border-b-4 border-violet-600">
            <picture>
                <img src={img} alt={title} className="w-full h-80" />
            </picture>
            <header className="p-2">
                <h2 className="h-12 text-md text-gray-700">{title}</h2>
            </header>
            <section className="pl-2">
                <p className="text-xl font-bold">${price}</p>
            </section>
            <footer className="flex mt-6 mb-2 justify-center gap-4 ">
                <Link to={`/item/${id}`} className="p-2 pl-6 pr-6 bg-slate-100 rounded-2xl text-sm">DETALLES</Link>
                <Link to={'/cart'} className="p-2 pl-6 pr-6 bg-violet-600 text-white rounded-2xl text-sm" onClick={addSingleProduct}>COMPRAR</Link>
            </footer>
        </article>
    )
}

export default Item;
