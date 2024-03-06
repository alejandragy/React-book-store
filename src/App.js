import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { useState } from 'react';

import NavBar from './components/NavBar/NavBar';
import NavCategories from './components/NavCategories/NavCategories';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetatilContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';
import CartWidget from './components/CartWidget/CartWidget';
import { ProductProvider } from './context/ProductContext';




function App() {

  return (
    <div className=''>
      <BrowserRouter>
        <CartProvider>
          <ProductProvider>
            <CartWidget />
            <div className='w-full flex flex-col md:justify-center md:flex-row md:flex-nowrap'>
             <NavCategories/>
              <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:itemId' element={<ItemDetatilContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='*' element={<h2>404 NOT FOUND</h2>} />
              </Routes>
            </div>
          </ProductProvider>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;