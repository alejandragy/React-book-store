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
            <h3 className='h-10 bg-violet-600 text-white font-bold pt-2  text-center'>NUEVA ORDEN</h3>
                <div className='flex flex-col gap-2 w-80 p-6 pb-10 bg-slate-100 shadow-lg'>
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

                <div className=" h-16 flex items-center justify-center gap-8 bg-violet-600 text-white font-bold">
                    <p>${total}</p>
                    <button type="submit" className="p-2 pl-6 pr-6 text-sm">GENERAR ORDEN</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;