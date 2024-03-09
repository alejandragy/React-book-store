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
                <div className='flex flex-col p-10 bg-white shadow-lg border-t-2 border-violet-600 md:flex-row'>
                    <div className="md:w-3/6">
                        <p className="text-violet-600 font-bold text-xl">TOTAL ${total} </p>
                    </div>
                    <div className="md:w-3/6 flex flex-col">
                        <label className=''>Nombre</label>
                        <input className='mb-10 h-8 border-b-2 border-gray-200 focus:outline-none md:w-80'
                            type="text" value={name} onChange={({ target }) => setName(target.value)} />

                        <label className=''>Teléfono</label>
                        <input className='mb-10 h-8 border-b-2 border-gray-200 focus:outline-none md:w-80'
                            type="text" value={phone} onChange={({ target }) => setName(target.value)} />

                        <label className=''>Email</label>
                        <input className='mb-10 h-8 border-b-2 border-gray-200 focus:outline-none md:w-80'
                            type="text" value={email} onChange={({ target }) => setName(target.value)} />
                    </div>

                </div>

                <div className=" h-16 flex items-center justify-center gap-8 bg-violet-600 text-white font-bold">
                    <button type="submit" className="p-2 pl-6 pr-6 text-sm">GENERAR ORDEN</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;