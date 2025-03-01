import React, { useState } from 'react'

import { IoClose } from "react-icons/io5";
import { Link } from 'react-scroll';

const Offcanvas = ({ isOffcanvasVisible, toggleOffcanvas }) => {

    return (
        <>
            <nav
                id='offcanvas'
                className={`fixed lg:hidden z-50 top-0 right-0 h-screen w-10/12 md:w-1/2 bg-[#BF7269] overflow-auto text-white transform transition-transform duration-300 ease-in-out ${isOffcanvasVisible ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <ul className='flex flex-col mt-6 gap-5 pb-10 px-5 items-center font-[quicksand] overflow-auto'>
                    <li className='self-end pr-5'>
                        <IoClose className='cursor-pointer' onClick={toggleOffcanvas} size={32} />
                    </li>
                    <li className='mt-3 mb-4'>
                        <Link
                            href='hero'
                            onClick={toggleOffcanvas}
                            className='text-lg cursor-pointer'
                            to='hero'
                            smooth={true}
                            offset={-50}
                            duration={500}
                        >
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className='mb-4'>
                        <Link
                            href='about-us'
                            onClick={toggleOffcanvas}
                            className='text-lg cursor-pointer'
                            to='about-us'
                            smooth={true}
                            offset={-180}
                            duration={500}
                        >
                            <span>Sobre nós</span>
                        </Link>
                    </li>
                    <li className='mb-4'>
                        <Link
                            href='cursos'
                            onClick={toggleOffcanvas}
                            className='text-lg cursor-pointer'
                            to='cursos'
                            smooth={true}
                            offset={-200}
                            duration={500}
                        >
                            <span>Cursos</span>
                        </Link>
                    </li>
                    <li className='mb-4'>
                        <Link
                            href='pos-graduacao'
                            onClick={toggleOffcanvas}
                            className='text-lg cursor-pointer'
                            to='pos-graduacao'
                            smooth={true}
                            offset={-130}
                            duration={500}
                        >
                            <span>Pós-graduação</span>
                        </Link>
                    </li>
                    <li className='mb-4'>
                        <Link
                            href='consultas'
                            onClick={toggleOffcanvas}
                            className='text-lg cursor-pointer'
                            to='consultas'
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            <span>Consultas</span>
                        </Link>
                    </li>
                    <li className='mb-4'>
                        <Link
                            onClick={toggleOffcanvas}
                            className='text-lg cursor-pointer'
                            to='contact'
                            smooth={true}
                            offset={-50}
                            duration={500}
                        >
                            <span>Fale conosco</span>
                        </Link>
                    </li>
                    <li className='mt-8'>
                        <Link
                            onClick={toggleOffcanvas}
                            className='text-lg cursor-pointer'
                            to='hero'
                            smooth={true}
                            offset={-50}
                            duration={500}
                        >
                            <img src="/logo-header.png" alt="header logo" className='w-20' />
                        </Link>
                    </li>
                </ul>
            </nav>
            {isOffcanvasVisible && (
                <div
                    className='fixed inset-0 z-20 bg-black/80 lg:hidden'
                    onClick={toggleOffcanvas}
                ></div>
            )}
        </>
    )
}

export default Offcanvas