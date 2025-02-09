import React, { useState } from 'react'

import { IoClose } from "react-icons/io5";

const Offcanvas = ({ isOffcanvasVisible, toggleOffcanvas }) => {

    return (
        <>
            <nav
                id='offcanvas'
                className={`fixed z-50 top-0 right-0 h-screen w-10/12 bg-[#BF7269] overflow-auto text-white transform transition-transform duration-300 ease-in-out ${isOffcanvasVisible ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <ul className='flex flex-col mt-6 gap-5 pb-10 px-5 items-center font-[quicksand] overflow-auto'>
                    <li className='self-end pr-5'>
                        <IoClose className='cursor-pointer' onClick={toggleOffcanvas} size={32} />
                    </li>
                    <li className='mt-3 mb-4'>
                        <a href="#" className='text-2xl'>
                            <span>Home</span>
                        </a>
                    </li>
                    <li className='mb-4'>
                        <a href="#" className='text-2xl'>
                            <span>Sobre nós</span>
                        </a>
                    </li>
                    <li className='mb-4'>
                        <a href="#" className='text-2xl'>
                            <span>Cursos</span>
                        </a>
                    </li>
                    <li className='mb-4'>
                        <a href="#" className='text-2xl'>
                            <span>Pós-graduação</span>
                        </a>
                    </li>
                    <li className='mb-4'>
                        <a href="#" className='text-2xl'>
                            <span>Consultas</span>
                        </a>
                    </li>
                    <li className='mb-4'>
                        <a href="#" className='text-2xl'>
                            <span>Blog</span>
                        </a>
                    </li>
                    <li className='mt-8'>
                        <img src="/logo-header.png" alt="header logo" className='w-20' />
                    </li>
                </ul>
            </nav>
            {isOffcanvasVisible && (
                <div
                    className='fixed inset-0 z-20 bg-black bg-opacity-50'
                    onClick={toggleOffcanvas}
                ></div>
            )}
        </>
    )
}

export default Offcanvas