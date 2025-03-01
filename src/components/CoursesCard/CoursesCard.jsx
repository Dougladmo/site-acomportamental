import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { courses } from './Courses';

const MobileCoursesCard = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='flex w-full'>
            {courses.map((course, index) => (
                <div key={index} className={`flex flex-row h-[650px] justify-center transition-all duration-500 ${openIndex === index ? '' : 'w-[14.28%]'}`}>
                    <h2
                        className={`text-lg h-full text-black relative font-semibold text-center ${openIndex === index ? 'w-[40%]' : 'w-full'} ${course.bgColor} font-[quicksand] cursor-pointer`}
                        onClick={() => toggleDropdown(index)}
                    >
                        <p className='absolute text-center -rotate-90 -translate-x-1/2 -translate-y-1/2 w-96 top-1/2 left-1/2'>
                            {course.title}
                        </p>
                    </h2>
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ width: 0, opacity: 1 }}
                                animate={{ width: "100%", opacity: 1 }}
                                exit={{ width: 0, opacity: 1 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className={`text-lg flex flex-col gap-5 ${course.innerBgColor} font-[quicksand] h-full overflow-hidden px-6 py-12`}
                            >
                                <div className='flex flex-col items-start px-12 py-5'>
                                    <p className='text-lg text-justify'>
                                        {course.description}
                                    </p>
                                    <p className='flex flex-col my-3 text-lg'>
                                        <span><span className='font-bold'>Carga Horária:</span> {course.hours} </span>
                                        <span><span className='font-bold'>Certificação:</span> Com certificado válido em todo território nacional. </span>
                                    </p>
                                    <p className='text-xl font-bold'>Investimento: {course.investment}</p>
                                    <a target='_blank' className={`${course.bgColor} w-40 text-center mt-10 my-4 text-base transition duration-500 font-bold py-4 px-6 rounded-2xl border-2 ${course.borderColor} ${course.hoverTextColor} hover:bg-transparent`} href={`${course.buttonLink}`}>Saiba mais</a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default MobileCoursesCard;
