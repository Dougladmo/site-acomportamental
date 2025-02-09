import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { courses } from './Courses'

const CoursesCard = () => {
    const [openIndex, setOpenIndex] = useState(null);

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
                                className={`text-xs ${course.bgColor}/50 font-[quicksand] overflow-hidden`}
                            >
                                <div className='px-12 py-6 '>
                                    <p className='text-justify'>
                                        {course.description}
                                    </p>
                                    <p className='flex flex-col my-3'>
                                        <span><span className='font-bold'>Carga Horária:</span> {course.hours} </span>
                                        <span><span className='font-bold'>Ministrante:</span> {course.instructor} </span>
                                    </p>
                                    <p className='text-sm font-bold'>Investimento: {course.investment}</p>
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
