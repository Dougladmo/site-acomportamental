import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import Offcanvas from '../Offcanvas';

const Header = () => {
  const [isOffcanvasVisible, setIsOffcanvasVisible] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasVisible(!isOffcanvasVisible);
  };

  return (
    <header className='bg-[#BF7269] w-screen fixed top-0 z-10 px-8 py-5 h-16 flex items-center justify-between p-4'>
      <img src="/logo-header.png" alt="header logo" className='w-12' />
      <IoIosMenu
        className='text-white cursor-pointer'
        size={35}
        onClick={toggleOffcanvas}
      />
      <Offcanvas isOffcanvasVisible={isOffcanvasVisible} toggleOffcanvas={() => setIsOffcanvasVisible()} />
    </header>
  );
};

export default Header;