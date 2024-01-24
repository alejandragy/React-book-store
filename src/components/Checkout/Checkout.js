import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Timestamp, collection, getDocs, writeBatch, query, where, documentId, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

import CheckoutForm from '../CheckoutForm/CheckoutForm';



const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            };

            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);
            const productsRef = collection(db, 'products');
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));
            const { docs } = productsAddedFromFirestore;

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
                const productsAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productsAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                }
                else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id);
                clearCart();
            } else {
                console.log('Hay productos que están fuera de stock');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (<div>
            <div className="flex justify-center items-ceter h-[500px] w-80 mt-10 p-6 pb-10 rounded-2xl bg-violet-600 shadow-lg">
                <p className='text-white'>Generando orden...</p>
            </div>
        </div>)
    };

    if (orderId) {
        return <div className=" flex flex-col gap-10  items-center h-[500px] w-80 mt-10 p-6 pb-10 rounded-2xl bg-violet-600 shadow-lg text-white">
        <p className='font-bold'>ORDEN #{orderId} </p>
        <p>Compra finalizada exitosamente!</p>    
        </div>
    };

    return (
        <div className='mt-10'>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
}

export default Checkout;