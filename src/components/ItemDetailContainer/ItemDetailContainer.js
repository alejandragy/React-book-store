import { useState, useEffect } from 'react';
import { getproductById } from '../../asyncMock';

import ItemDetail from '../ItemDetail/ItemDetail';

import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const { itemId } = useParams();

    useEffect(() => {
        getproductById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            })
    }, [itemId])

    return (
        <div className='m-4'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;