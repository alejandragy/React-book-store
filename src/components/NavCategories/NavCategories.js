import libros from './img/libros.png';
import varita from './img/varita-magica.png';
import bookStoreLogo from './img/book-store-logo.png';

import { NavLink, Link } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import { useContext } from 'react';





const NavCategories = () => {
    const {generateRandomProduct, setRandomProduct, clearRandomProduct} = useContext(ProductContext);

    const handleRandomBookClick = () => {
        const randomBook = generateRandomProduct();
        console.log('Libro aleatorio:', randomBook);
        setRandomProduct(randomBook);
      };
 
    return (
        <div className='w-full flex flex-col bg-violet-800 shadow-2xl md:w-64'>
            <Link to='/' className='py-6 px-6 bg-white' onClick={clearRandomProduct}><img src={bookStoreLogo} alt='logo' className='h-6' /></Link>
            <div className='h-screen px-6 py-8 flex flex-col text-lg bg-violet-800 text-white'>
                <Link to='/' onClick={handleRandomBookClick} className='flex items-center gap-x-1 rounded-xl  bg-violet-200 bg-opacity-30 hover:scale-105'> <img src={varita} className='w-10'></img> Libro random</Link>
                <div className='mt-4 flex items-center gap-x-1 '> <img src={libros} className='w-10'></img> <p>Categorías</p></div>
                <div className=' mt- 2 flex flex-col pl-12 gap-y-3'>
                    <NavLink to={`/category/Arte`} onClick={clearRandomProduct} className={({ isActive }) => isActive ? 'font-bold' : ''}>Arte</NavLink>
                    <NavLink to={`/category/Ciencia`} onClick={clearRandomProduct} className={({ isActive }) => isActive ? 'font-bold' : ''}>Ciencia</NavLink>
                    <NavLink to={`/category/Cocina`} onClick={clearRandomProduct} className={({ isActive }) => isActive ? 'font-bold' : ''}>Cocina</NavLink>
                    <NavLink to={`/category/Filosofía`} onClick={clearRandomProduct} className={({ isActive }) => isActive ? 'font-bold' : ''}>Filosofía</NavLink>
                    <NavLink to={`/category/Historia`} onClick={clearRandomProduct} className={({ isActive }) => isActive ? 'font-bold' : ''}>Historia</NavLink>
                    <NavLink to={`/category/Humor`} onClick={clearRandomProduct} className={({ isActive }) => isActive ? 'font-bold' : ''}>Humor</NavLink>
                    <NavLink to={`/category/Infantiles`} onClick={clearRandomProduct} className={({ isActive }) => isActive ? 'font-bold' : ''}>Infantiles</NavLink>
                    <NavLink to={`/category/Narrativa`} onClick={clearRandomProduct} className={({ isActive }) => isActive ? 'font-bold' : ''}>Narrativa</NavLink>
                    <NavLink to={`/category/Poesía`} onClick={clearRandomProduct} className={({ isActive }) => isActive ? 'font-bold' : ''}>Poesía</NavLink>
                    <NavLink to={`/category/Psicología`} onClick={clearRandomProduct} className={({ isActive }) => isActive ? 'font-bold' : ''}>Psicología</NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavCategories;  