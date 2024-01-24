import { useState } from "react"

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const { total } = useContext(CartContext);

    const handleConfirm = (event) => {
        event.preventDefault();
        const userData = {
            name, phone, email
        };
        onConfirm(userData);
    };

    return (
        <div className=''>
            <form onSubmit={handleConfirm}>
                <div className='flex flex-col gap-2 w-80 p-6 pb-10 rounded-t-2xl bg-slate-100 shadow-lg'>
                    <h3 className='text-violet-600 font-bold mb-16 pl-2 '>NUEVA ORDEN</h3>
                    <label className='pl-2'>Nombre</label>
                    <input className='mb-4 rounded-xl h-10 p-3 bg-slate-200 focus:outline-none'
                        type="text" value={name} onChange={({ target }) => setName(target.value)} />

                    <label className='pl-2'>Teléfono</label>
                    <input className='mb-4 rounded-xl h-10 p-3 bg-slate-200 focus:outline-none'
                        type="text" value={phone} onChange={({ target }) => setPhone(target.value)} />

                    <label className='pl-2'>Email</label>
                    <input
                        className='mb-4 rounded-xl h-10 p-3 bg-slate-200 focus:outline-none'
                        type="text" value={email} onChange={({ target }) => setEmail(target.value)} />
                </div>

                <div className=" h-16 flex items-center justify-center gap-8 bg-violet-600 rounded-b-2xl text-white font-bold">
                    <p>${total}</p>
                    <button type="submit" className="p-2 pl-6 pr-6 text-sm">GENERAR ORDEN</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;