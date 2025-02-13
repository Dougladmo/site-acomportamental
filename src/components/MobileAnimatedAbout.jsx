import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { about } from '../pages/Home/Home'

const MobileAnimatedAbout = () => {
    const [visibleItem, setVisibleItem] = useState('brand');

    const handleClick = (item) => {
        setVisibleItem(visibleItem === item ? 'brand' : item);
    };

    return (
        <div className='flex flex-col items-center justify-center w-full gap-5 lg:justify-center md:justify-between md:hidden'>
            <h2 className='text-xl md:text-3xl self-end pr-10 font-[quicksand] font-bold text-[#BF7269] z-[1]'>
                Sobre Nós
            </h2>
            <div className='flex items-center justify-center gap-8 px-10 lg:mr-48'>
                {about
                    .filter((item) => item.name !== 'brand')
                    .map((item, index) => (
                        <motion.div
                            key={index}
                            onClick={() => handleClick(item.name)}
                            initial={{ width: "6.5rem" }}
                            animate={{ width: visibleItem === item.name ? "16rem" : "6.5rem" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className={`z-[1] h-64 md:h-80 flex items-center justify-center cursor-pointer rounded-lg relative bg-cover bg-center lg:${item.bgImg} bg-[#BF7269] 
                            ${visibleItem === item.name ? `items-end ${item.bgImg} h-80` : `md:bg-left`}`}
                        >
                            <p className={`bg-[#BF7269] w-full text-white text-lg md:text-2xl rounded-b-lg text-center p-1 font-[quicksand] transition-transform duration-300 flex items-center justify-center 
                            ${visibleItem !== item.name ? "-rotate-90 md:rotate-0 md:self-end md:pt-4 md:pb-9 md:bg-[#BF7269] tracking-wider h-0 md:text-lg" : ""}`}>
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                            </p>
                        </motion.div>
                    ))}
            </div>
            <div className='z-[1] flex flex-col items-end justify-center px-8 gap-3 md:gap-5'>
                <p className='text-sm text-justify'>
                    {about.find((item) => item.name === visibleItem)?.text}
                </p>
                <a href="https://wa.me/+5591986442158?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Acomportamental%20e%20as%20vagas%20de%20turmas%20disponíveis.%20Pode%20me%20informar%20sobre%20as%20próximas%20turmas%20e%20como%20me%20inscrever?%20😊" target='_blank' className='text-white bg-[#BF7269] hover:bg-transparent border transition duration-300 hover:border-[#BF7269] lg:p-5 hover:text-[#BF7269] rounded-xl self-center p-4 text-sm font-[quicksand] font-bold text-[10px] text-center md:self-center md:text-lg'>
                    Mais de 500 profissionais já foram capacitados conosco!
                </a>
            </div>
        </div>
    );
};

export default MobileAnimatedAbout;