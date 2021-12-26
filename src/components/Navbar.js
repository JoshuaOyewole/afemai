import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
   const btnMenu = useRef(null);
   const navList = useRef(null);

    const toggleBtn = () =>{ 
       navList.current.classList.toggle('flex');
       navList.current.classList.toggle('hidden');
    }

    return (
        <>
            <div className='info hidden shadow text-xs justify-end px-4 pt-1 lg:px-16 text-brand md:font-semibold'>
                <li className='flex pr-4 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <p>Tel: 2347032054367</p>
                </li>
                <li className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                    07032054367</li>
            </div> 
            <nav className='navbar bg-white-800 font-semibold font-Montserrat shadow flex flex-col justify-between md:px-16 md:flex-row md:py-3 lg:py-0 lg:py-1.5'>
                <div className="logo py-4 px-6 flex text-red">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"  viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"  />
                    </svg>
                        Afemai
                    </div>
                <button className="toggleBtn md:hidden" ref={btnMenu} onClick={toggleBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="toggleBtn h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <ul className="navlist bg-gray-900 text-primary min-h-screen flex-col items-center justify-around py-40 md:flex md:flex-row md:min-h-0 md:py-2 md:bg-white md:text-black md:text-xs hidden" ref={navList}>
                    <li className='px-3 uppercase'><NavLink to='/' className='nav-item'>Home</NavLink></li>
                    <li className='px-3 uppercase'><NavLink to='/terminals' className='nav-item'>Terminals</NavLink></li>
                    <li className='px-3 uppercase'><NavLink to='/about' className='nav-item'>About</NavLink></li>
                    <li className='px-3 uppercase'><NavLink to='/contact' className='nav-item'>Contact Us</NavLink></li>
                </ul>
            </nav>
    </>
    )
}

export default Navbar
