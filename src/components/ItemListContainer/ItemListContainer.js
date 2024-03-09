import { useState, useEffect, useContext } from "react"
import { ProductContext } from '../../context/ProductContext';
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

import ItemList from "../ItemList/ItemList";



const ItemListContainer = ({ }) => {
    const { products, randomProduct, getProductsByCategory} = useContext(ProductContext);
    const { categoryId } = useParams();
    const [displayedProducts, setDisplayedProducts] = useState([]);

    useEffect(() => {
        const data = async () => {
            try {
                let productsToDisplay;
                if (categoryId) {
                    productsToDisplay = await getProductsByCategory(categoryId);
                }
                else if(randomProduct.length != 0){
                    productsToDisplay = [randomProduct];
                }
                else {
                    productsToDisplay = products;
                }
                setDisplayedProducts(productsToDisplay)

            } catch (error) {
                console.error('Error al traer la data', error);
            }
        }
        data();
    }, [categoryId, randomProduct, getProductsByCategory])

    return (
        <div className="w-full min-h-screen bg-gray-100">
            <ItemList products={displayedProducts} />
        </div>
    )
}

export default ItemListContainer;