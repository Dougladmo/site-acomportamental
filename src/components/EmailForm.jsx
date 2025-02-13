import React from 'react'
import InputForm from './InputForm'

const EmailForm = () => {
    return (
        <form className='bg-[#BF7269] flex flex-col items-center py-5 px-5 justify-center w-72 gap-5 rounded-3xl'>
            <div className='grid w-64 grid-cols-2 gap-5 px-5 text-xs placeholder:text-xs'>
                <InputForm type='text' name='Nome' placeholder='Seu nome' />
                <InputForm type='tel' name='Telefone' placeholder='Insira seu telefone' />
                <InputForm type='email' name='E-mail' placeholder='Insira seu e-mail' />
                <InputForm type='text' name='Assunto' placeholder='Insira o assunto'  />
            </div>
            <label htmlFor="message" className='text-white text-md text-xs flex flex-col font-[quicksand] font-medium w-64 px-5'>
                Mensagem
                <textarea name="message" id="message" className='p-4 mt-2 font-light border-2 border-white outline-0 rounded-3xl pb-7 indent-2' />
            </label>
            <button className='p-1 font-[quicksand] hover:bg-transparent hover:text-white hover:border-white border transition duration-300 cursor-pointer text-xss font-bold text-[#BF7269] bg-white rounded-3xl w-2/3' type="submit">
                Enviar
            </button>
        </form>
    )
}

export default EmailForm
