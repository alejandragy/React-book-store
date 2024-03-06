import { useState, useEffect, useContext } from "react"
import { ProductContext } from '../../context/ProductContext';
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

import ItemList from "../ItemList/ItemList";



const ItemListContainer = ({ }) => {

    /*const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId)) : collection(db, 'products')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data();;
                    return { id: doc.id, ...data }
                });
                setProducts(productsAdapted);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [categoryId]);

    const getRandomProduct = () => {
        if(products.length === 0) return [];
        const randomIndex = Math.floor(Math.random() * products.length);
        return products[randomIndex];
    } */
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
        <div className="mt-4 w-full">
            <ItemList products={displayedProducts} />
        </div>
    )
}

export default ItemListContainer;