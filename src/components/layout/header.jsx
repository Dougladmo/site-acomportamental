import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import Offcanvas from '../Offcanvas';
import HeaderLink from '../HeaderLink'
import { Link } from 'react-scroll';

const Header = () => {
  const [isOffcanvasVisible, setIsOffcanvasVisible] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasVisible(!isOffcanvasVisible);
  };

  return (
    <header className='bg-[#BF7269] w-screen fixed top-0 z-10'>
      <div className='flex items-center justify-between px-8 py-5 mx-auto max-w-7xl'>
        <Link href='#hero' to='hero' smooth={true} offset={-50}>
          <img src="/logo-header.png" alt="header logo" className='w-12 cursor-pointer' />
        </Link>
        <nav className='hidden lg:flex'>
          <ul className='flex items-center justify-center gap-5 text-white font-[quicksand] font-normal'>
            <li>
              <HeaderLink offset={0} link='hero' title='Home' />
            </li>
            <li>
              <HeaderLink offset={-180} link='about-us' title='Sobre nós' />
            </li>
            <li>
              <HeaderLink offset={-200} link='cursos' title='Cursos' />
            </li>
            <li>
              <HeaderLink offset={-130} link='pos-graduacao' title='Pós-graduação' />
            </li>
            <li>
              <HeaderLink offset={-100} link='consultas' title='Consultas' />
            </li>
            <li>
              <HeaderLink offset={-60} link='contact' title='Fale conosco' />
            </li>
          </ul>
        </nav>
        <IoIosMenu
          className='text-white cursor-pointer lg:hidden'
          size={35}
          onClick={toggleOffcanvas}
        />
        <Offcanvas isOffcanvasVisible={isOffcanvasVisible} toggleOffcanvas={() => setIsOffcanvasVisible(!isOffcanvasVisible)} />
      </div>
    </header>
  );
};

export default Header;