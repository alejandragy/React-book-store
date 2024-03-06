import { createContext, useState, useEffect } from "react";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const ProductContext = createContext({
    products: [],
    loading: false,
    getProductsByCategory: () => {},
    generateRandomProduct: () => {},
    setRandomProduct: (product) => {},
    clearRandomProduct: () => {},
});

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [randomProduct, setRandomProduct] = useState([]);
    

   console.log(products);


    const getProducts = async () => {
        setLoading(true);
        try {
            const collectionRef = collection(db, 'products');
            const querySnapshot = await getDocs(collectionRef);
            const productsAdapted = querySnapshot.docs.map(doc => {
                const data = doc.data();
                return { id: doc.id, ...data };
            });
            setProducts(productsAdapted);
            
        } catch {
            console.error('Error al obtener productos');
            return null;
        } finally {
            setLoading(false);
        }
    }


    const getProductsByCategory = async (category) => {
        try {
            const collectionRef = collection(db, 'products');
            const categoryQuery = query(collectionRef, where('category', '==', category));
            const querySnapshot = await getDocs(categoryQuery);
            const categoryProducts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            return categoryProducts;
        } catch (error) {
            console.error('Error al obtener productos por categoría', error);
            return [];
        }
    }

    const generateRandomProduct = () => {
        if (products.length === 0) return [];
        const randomIndex = Math.floor(Math.random() * products.length);
        return products[randomIndex];
    }

    const setRandomProductHandler = (randomProduct) => {
        setRandomProduct(randomProduct);
      };

    const clearRandomProduct = () =>{
        setRandomProduct([]);
    }
    

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <ProductContext.Provider value={{products, loading, randomProduct, getProductsByCategory, generateRandomProduct, setRandomProduct: setRandomProductHandler, clearRandomProduct}}>
            {children}
        </ProductContext.Provider>
    )

};
