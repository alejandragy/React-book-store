import { useState } from "react"


const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();
        const userData = {
            name, phone, email
        };
        onConfirm(userData);
    };

    return (
        <div className="flex justify-center">
            <form onSubmit={handleConfirm} className="flex flex-col gap-2 w-80 ">
                <label className="pl-2">Nombre</label>
                <input className="mb-4 border-2 border-slate-100 rounded-2xl h-10 p-2" 
                    type="text" value={name} onChange={({target})=> setName(target.value)} />

                <label className="pl-2">Teléfono</label>
                <input className=" mb-4 border-2 border-slate-100 rounded-2xl h-10 p-2"
                    type="text" value={phone} onChange={({target})=> setPhone(target.value)} />

                <label className="pl-2">Email</label>
                <input
                    className=" mb-4 border-2 border-slate-100 rounded-2xl h-10 p-2"
                    type="text" value={email} onChange={({target})=> setEmail(target.value)} />
                <div className="mt-6 flex justify-center">
                    <button type="submit" className="p-2 pl-6 pr-6 bg-violet-600 text-white rounded-2xl text-sm">CREAR ORDEN</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;