import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavCategories = ({ }) => {

    const [expanded, setExpanded] = useState(0);

    const isExpanded = expanded === 1;

    return (
        <div className=''>
            <button onClick={() => expanded === 0 ? setExpanded(1) : setExpanded(0)} className='text-white'>Libros</button>
            <div className= {isExpanded ? 'w-full left-0 absolute mt-4 flex flex-col bg-violet-600 bg-opacity-80 gap-10 px-10 pb-6' : 'hidden'}>
                    <div className='flex flex-wrap w-full items-center gap-10 mt-3 '>
                    <NavLink to={`/category/Arte`} className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-white'}>Arte</NavLink>
                    <NavLink to={`/category/Ciencia`} className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-white'}>Ciencia</NavLink>
                    <NavLink to={`/category/Cocina`} className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-white'}>Cocina</NavLink>
                    <NavLink to={`/category/Filosofía`} className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-white'}>Filosofía</NavLink>
                    <NavLink to={`/category/Historia`} className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-white'}>Historia</NavLink>
                    <NavLink to={`/category/Humor`} className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-white'}>Humor</NavLink>
                    <NavLink to={`/category/Infantiles`} className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-white'}>Infantiles</NavLink>
                    <NavLink to={`/category/Narrativa`} className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-white'}>Narrativa</NavLink>
                    <NavLink to={`/category/Poesía`} className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-white'}>Poesía</NavLink>
                    <NavLink to={`/category/Psicología`} className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-white'}>Psicología</NavLink>
                    </div>
            </div>
        </div>
    )
}

export default NavCategories;