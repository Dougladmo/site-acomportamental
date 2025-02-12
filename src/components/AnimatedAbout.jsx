import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedAbout = () => {
    const [visibleItem, setVisibleItem] = useState('brand');

    const handleClick = (item) => {
        setVisibleItem(visibleItem === item ? 'brand' : item);
    };

    const about = [
        {
            name: 'nicole',
            text: "Psicóloga e Mestra em Pesquisa e Teoria do Comportamento (UFPA). Especialista em Filosofia da Educação e Terapia de Aceitação e Compromisso (ACT). Atua como docente e supervisora universitária e diretora da ACOMPORTAMENTAL.",
            bgImg: 'bg-[url("/image-nicole.jpg")]',
        },
        {
            name: 'fabiane',
            text: "Psicóloga, Mestra e Doutora em Pesquisa e Teoria do Comportamento (UFPA). Especialista em Terapia de Aceitação e Compromisso (ACT). Atua como docente e supervisora universitária e diretora da ACOMPORTAMENTAL.",
            bgImg: 'bg-[url("/image-fabiane.jpg")]',
        },
        {
            name: 'brand',
            text: "Desde 2016, em Belém, a ACOMPORTAMENTAL oferece qualificação profissional a estudantes e profissionais da Psicologia e áreas afins. Com base na ciência comportamental, promovemos desenvolvimento pessoal e profissional, proporcionando um espaço acolhedor para aprendizado, crescimento e transformação.",
        },
    ];

    return (
        <div className='flex w-full gap-5 md:justify-between'>
            <div className='flex items-center justify-center w-1/2 gap-2'>
                {about
                    .filter((item) => item.name !== 'brand') // Filtra para exibir apenas 'nicole' e 'fabiane'
                    .map((item, index) => (
                        <motion.div
                            key={index}
                            onClick={() => handleClick(item.name)}
                            initial={{ width: "6.5rem" }}
                            animate={{ width: visibleItem === item.name ? "16rem" : "6.5rem" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className={`z-[1] h-48 md:h-80 flex items-center justify-center cursor-pointer rounded-lg relative bg-cover bg-center bg-[#BF7269] 
                            ${visibleItem === item.name ? `items-end ${item.bgImg}` : `md:bg-left bg-[#BF7269]  md:${item.bgImg}`}`}
                        >
                            <p className={`bg-[#BF7269] w-full text-white text-base md:text-2xl rounded-b-lg text-center p-1 font-[quicksand] transition-transform duration-300 flex items-center justify-center 
                            ${visibleItem !== item.name ? "-rotate-90 md:rotate-0 md:self-end md:pt-4 md:pb-9 md:bg-[#BF7269] tracking-wider h-0 md:text-lg" : ""}`}>
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                            </p>
                        </motion.div>
                    ))}
            </div>
            <div className='z-[1] flex flex-col items-end justify-center w-1/2 gap-3 md:gap-5'>
                <h2 className='text-xl md:text-4xl font-[quicksand] font-bold text-[#BF7269]'>
                    Sobre Nós
                </h2>
                <p className='text-xs text-justify md:text-xl'>
                    {about.find((item) => item.name === visibleItem)?.text}
                </p>
                <a href="https://wa.me/+5591986442158?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Acomportamental%20e%20as%20vagas%20de%20turmas%20disponíveis.%20Pode%20me%20informar%20sobre%20as%20próximas%20turmas%20e%20como%20me%20inscrever?%20😊" target='_blank' className='text-white bg-[#BF7269] hover:bg-transparent border transition duration-300 hover:border-[#BF7269] hover:text-[#BF7269] rounded-xl p-2 font-[quicksand] font-bold text-[10px] text-center md:self-center md:text-lg'>
                    Mais de 500 profissionais já foram capacitados conosco!
                </a>
            </div>
        </div>
    );
};

export default AnimatedAbout;