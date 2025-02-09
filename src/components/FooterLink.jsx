import React from 'react'
import { motion } from 'framer-motion';

const FooterLink = ({ link, title }) => {
    return (
        <motion.div
            className='relative inline-block'
            whileHover="hover"
            initial="initial"
        >
            <a href={link} target='_blank' className='relative pr-1 text-base'>
                <span>{title}</span>
            </a>
            <motion.div
                className='absolute bottom-0 left-0 h-[2px] bg-[#BF7269]'
                variants={{
                    initial: { width: 0 },
                    hover: { width: '100%' },
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
        </motion.div>
    )
}

export default FooterLink