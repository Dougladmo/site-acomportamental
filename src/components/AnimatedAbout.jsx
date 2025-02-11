import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedAbout = () => {
    const [visibleItem, setVisibleItem] = useState('brand'); 

    const handleClick = (item) => {
        setVisibleItem(visibleItem === item ? 'brand' : item); 
    };

    const about = {
        nicole: "Psicóloga e Mestra em Pesquisa e Teoria do Comportamento (UFPA). Especialista em Filosofia da Educação e Terapia de Aceitação e Compromisso (ACT). Atua como docente e supervisora universitária e diretora da ACOMPORTAMENTAL.",
        fabiane: "Psicóloga, Mestra e Doutora em Pesquisa e Teoria do Comportamento (UFPA). Especialista em Terapia de Aceitação e Compromisso (ACT). Atua como docente e supervisora universitária e diretora da ACOMPORTAMENTAL.",
        brand: "Somos uma comunidade de ensino contínuo que fortalece psicólogos e acadêmicos em Ciências do Comportamento. Com uma parceria exclusiva com a Faculdade CENSUPEG, há quase 10 anos oferecemos pós-graduações presenciais e online, além de cursos livres.",
    };

    return (
        <div className='flex w-full gap-5'>
            <div className='flex items-center justify-center w-1/2 gap-2'>
                <motion.div
                    onClick={() => handleClick('nicole')}
                    initial={{ width: "2rem" }}
                    animate={{ width: visibleItem === 'nicole' ? "100%" : "2rem" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`z-[1] h-48 flex items-center justify-center cursor-pointer rounded-lg bg-[#BF7269] relative bg-cover bg-center ${visibleItem === 'nicole' ? "bg-[url('/image1.jpg')] items-end" : ""}`}
                >
                    <p className={`bg-[#BF7269] w-full text-white text-base rounded-b-lg text-center p-1 font-[quicksand] transition-transform duration-300 flex items-center justify-center ${visibleItem !== 'nicole' ? "-rotate-90 p-0 bg-none tracking-wider h-0" : ""}`}>
                        Nicole
                    </p>
                </motion.div>

                <motion.div
                    onClick={() => handleClick('fabiane')}
                    initial={{ width: "2rem" }}
                    animate={{ width: visibleItem === 'fabiane' ? "100%" : "2rem" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`z-[1] h-48 flex items-center justify-center cursor-pointer rounded-lg bg-[#BF7269] relative bg-cover bg-center ${visibleItem === 'fabiane' ? "bg-[url('/image2.jpg')] items-end" : ""}`}
                >
                    <p className={`bg-[#BF7269] w-full text-white text-base rounded-b-lg text-center p-1 font-[quicksand] transition-transform duration-300 flex items-center justify-center ${visibleItem !== 'fabiane' ? "-rotate-90 p-0 bg-none tracking-wider h-0" : ""}`}>
                        Fabiane
                    </p>
                </motion.div>

                <motion.div
                    onClick={() => handleClick('brand')}
                    initial={{ width: "2rem" }}
                    animate={{ width: visibleItem === 'brand' ? "100%" : "2rem" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`z-[1] h-48 flex items-center justify-center cursor-pointer rounded-lg bg-[#BF7269] relative bg-cover bg-center ${visibleItem === 'brand' ? "bg-[url('/image2.jpg')] items-end" : ""}`}
                >
                    <p className={`bg-[#BF7269] w-full text-white text-xs rounded-b-lg text-center p-1 font-[quicksand] transition-transform duration-300 flex items-center justify-center ${visibleItem !== 'brand' ? "-rotate-90 p-0 bg-none tracking-wider h-0 text-base" : ""}`}>
                        Acomportamental
                    </p>
                </motion.div>
            </div>
            <div className='z-[1] flex flex-col items-end justify-center w-1/2 gap-3'>
                <h2 className='text-xl font-[quicksand] font-bold text-[#BF7269]'>
                    Sobre nós
                </h2>
                <p className='text-xs text-start'>
                    {about[visibleItem]}
                </p>
                <a href="https://wa.me/+5591986442158?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Acomportamental%20e%20as%20vagas%20de%20turmas%20disponíveis.%20Pode%20me%20informar%20sobre%20as%20próximas%20turmas%20e%20como%20me%20inscrever?%20😊" target='_blank' className='text-white bg-[#BF7269] hover:bg-transparent border transition duration-300 hover:border-[#BF7269] hover:text-[#BF7269] rounded-xl p-2 font-[quicksand] font-bold text-[10px] text-center'>
                    Mais de 500 profissionais já foram capacitados conosco!
                </a>
            </div>
        </div>
    );
};

export default AnimatedAbout;