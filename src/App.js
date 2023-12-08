import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetatilContainer from './components/ItemDetailContainer/ItemDetailContainer'



function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/item/:itemId' element={<ItemDetatilContainer/>} />
          <Route path='*' element={<h2>404 NOT FOUND</h2>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
