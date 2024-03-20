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
        <article className="w-60 shadow-xl  bg-white  ">
            <div className="h-80 px-4 pt-4 overflow-hidden">
                <img src={img} alt={title} className="w-full h-full border-b-2 border-violet-100" />
            </div>
            <header className="p-4">
                <h2 className="text-lg text-md text-gray-700 truncate">{title}</h2>
            </header>
            <section className="pl-4">
                <p className="text-xl font-bold">${price}</p>
            </section>
            <footer className="flex mt-2 mb-2 p-4 justify-center gap-5 ">
                <Link to={`/item/${id}`} className="p-1.5 px-4 bg-slate-100 rounded-2xl text-sm font-bold">DETALLES</Link>
                <Link to={'/cart'} className="p-1.5 px-4 bg-violet-600 text-white rounded-2xl text-sm font-bold transition-transform duration-500 ease-in-out transform  hover:scale-105" onClick={addSingleProduct}>COMPRAR</Link>
            </footer>
        </article>
    )
}

export default Item;
