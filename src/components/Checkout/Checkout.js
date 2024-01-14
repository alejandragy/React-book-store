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
        return <h1>Generando orden...</h1>
    };

    if (orderId) {
        return <h1>El id de su orden es: {orderId} </h1>
    };

    return (
        <div className='mt-10 '>
            <h1 className='mb-4 text-center font-bold text-violet-600 text-xl'>CHECKOUT</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
}

export default Checkout;