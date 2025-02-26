import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { courses } from './Courses'

const CoursesCard = () => {
    const [openIndex, setOpenIndex] = useState(1);

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            {courses.map((course, index) => (
                <div key={index}>
                    <h4
                        className={`text-sm text-black font-semibold text-center ${course.bgColor} font-[quicksand] cursor-pointer py-4 ${index === 0 ? 'rounded-t-xl' : ''} ${openIndex !== index && index === courses.length - 1 ? 'rounded-b-xl' : ''}`}
                        onClick={() => toggleDropdown(index)}
                    >
                        {course.title}
                    </h4>
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 1 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 1 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className={`text-sm ${course.innerBgColor} font-[quicksand] overflow-hidden ${openIndex == index && index === courses.length - 1 ? 'rounded-b-xl' : ''} `}
                            >
                                <div className='flex flex-col items-center px-12 py-5'>
                                    <p className='text-justify'>
                                        {course.description}
                                    </p>
                                    <p className='flex flex-col my-3'>
                                        <span><span className='font-bold'>Carga Horária:</span> {course.hours} </span>
                                        <span><span className='font-bold'>Certificação:</span> Com certificado válido em todo território nacional. </span>
                                    </p>
                                    <p className='text-base font-bold'>Investimento: {course.investment}</p>
                                    <a target='_blank' className={`${course.bgColor} my-4 text-base transition duration-500 font-bold py-4 px-6 rounded-2xl border-2 ${course.borderColor} ${course.hoverTextColor} hover:bg-transparent`} href={`${course.buttonLink}`}>Saiba mais</a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default CoursesCard;
