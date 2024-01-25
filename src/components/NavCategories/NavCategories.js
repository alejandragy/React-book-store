import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavCategories = ({ }) => {

    const [expanded, setExpanded] = useState(0);

    return (
        <div className=''>
            <button onClick={() => expanded === 0 ? setExpanded(1) : setExpanded(0)} className='text-white font-bold'>Libros</button>
            <div className= {expanded === 1 ? 'w-full left-0 absolute mt-4 flex flex-col bg-violet-600 bg-opacity-90 gap-10 px-10 pb-6' : 'hidden'}>
                    <div className='flex flex-wrap w-full items-center gap-10 mt-2 '>
                    <NavLink to={`/category/Arte`} className={({ isActive }) => isActive ? 'text-white' : 'text-black'}>Arte</NavLink>
                    <NavLink to={`/category/Ciencia`} className={({ isActive }) => isActive ? 'text-white' : 'text-black'}>Ciencia</NavLink>
                    <NavLink to={`/category/Cocina`} className={({ isActive }) => isActive ? 'text-white' : 'text-black'}>Cocina</NavLink>
                    <NavLink to={`/category/Filosofía`} className={({ isActive }) => isActive ? 'text-white' : 'text-black'}>Filosofía</NavLink>
                    <NavLink to={`/category/Historia`} className={({ isActive }) => isActive ? 'text-white' : 'text-black'}>Historia</NavLink>
                    <NavLink to={`/category/Humor`} className={({ isActive }) => isActive ? 'text-white' : 'text-black'}>Humor</NavLink>
                    <NavLink to={`/category/Infantiles`} className={({ isActive }) => isActive ? 'text-white' : 'text-black'}>Infantiles</NavLink>
                    <NavLink to={`/category/Narrativa`} className={({ isActive }) => isActive ? 'text-white' : 'text-black'}>Narrativa</NavLink>
                    <NavLink to={`/category/Poesía`} className={({ isActive }) => isActive ? 'text-white' : 'text-black'}>Poesía</NavLink>
                    <NavLink to={`/category/Psicología`} className={({ isActive }) => isActive ? 'text-white' : 'text-black'}>Psicología</NavLink>
                    </div>
            </div>
        </div>
    )
}

export default NavCategories;