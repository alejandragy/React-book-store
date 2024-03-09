import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

import ItemDetail from '../ItemDetail/ItemDetail';



const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, 'products', itemId);

        getDoc(docRef)
            .then(response => {
                const data = response.data();
                const productAdapted = {id : response.id, ...data};
                setProduct(productAdapted);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() =>{
                setLoading(false);
            })
    }, [itemId])

    return (
        <div className='w-full h-screen bg-gray-100'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;