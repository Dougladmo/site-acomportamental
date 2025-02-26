import React from 'react'

const InputForm = ({ name, placeholder, type, handleOnChange }) => {
    return (
        <label htmlFor={name} className='text-white bg-transparent flex flex-col font-[quicksand] border-b font-medium border-white pb-2'>
            { name }
            <input onChange={handleOnChange} type={type} name={name} placeholder={placeholder} id={name} className='text-white bg-transparent font-extralight outline-0'/>
        </label>
    )
}

export default InputForm