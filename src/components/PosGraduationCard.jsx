import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

const cursosPos = [
    {
        title: 'Análise do Comportamento Aplicada ao TEA',
        description: 'Domine as sete dimensões do ABA e atue com segurança em intervenções clínicas, domiciliares e escolares, usando práticas baseadas em evidências para auxiliar pessoas com TEA.'
    },
    {
        title: 'Neuropsicologia Clínica',
        description: 'Aprenda a avaliar e compreender o comportamento humano com uma abordagem científica e baseada em evidências, aplicando indicadores mensuráveis para diagnóstico e intervenção.'
    },
    {
        title: 'Neuropsicopedagogia Clínica',
        description: 'Desenvolva estratégias para atender indivíduos com dificuldades de aprendizagem e transtornos do neurodesenvolvimento, promovendo inclusão e reintegração social.'
    },
];

const PosGraduationCard = () => {
    const [cursoIndex, setCursoIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const handlePrevCurso = () => {
        setDirection(-1);
        setCursoIndex((prevIndex) => prevIndex === 0 ? cursosPos.length - 1 : prevIndex - 1);
    };

    const handleNextCurso = () => {
        setDirection(1);
        setCursoIndex((prevIndex) => prevIndex === cursosPos.length - 1 ? 0 : prevIndex + 1);
    };

    return (
        <div className='bg-[#F6B0AF] sm:w-2/3 sm:mx-auto sm:h-96 h-56 gap-3 px-5 py-5 rounded-lg flex items-center lg:justify-center lg:gap-28 lg:px-12 mt-10 justify-center mx-5 relative lg:w-2/3 lg:mx-auto lg:h-96'>
            <button className='p-1 text-white border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-[#F6B0AF] duration-300 transition' onClick={handlePrevCurso}>
                <FaArrowLeft className='w-3 h-3 md:w-6 md:h-6' />
            </button>
            <div className='flex flex-col items-center justify-center h-full overflow-hidden pt-7 w-72 lg:w-full'>
                <img src="/censupeg.png" alt="logo censupeg" className='absolute top-3 w-18' />
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={cursoIndex}
                        initial={{ opacity: 0, x: direction * 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -direction * 50 }}
                        transition={{ duration: 0.5 }}
                        className='text-center'
                    >
                        <h3 className='text-sm md:text-xl sm:text-lg font-[quicksand] font-bold mb-2 lg:mb-8'>
                            {cursosPos[cursoIndex].title}
                        </h3>
                        <p className='text-xs sm:text-base md:text-lg font-[quicksand] mx-4 lg:mx-0'>
                            {cursosPos[cursoIndex].description}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
            <button className='p-1 text-white border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-[#F6B0AF] duration-300 transition' onClick={handleNextCurso}>
                <FaArrowRight className='w-3 h-3 md:w-6 md:h-6' />
            </button>
        </div>
    );
};

export default PosGraduationCard;
