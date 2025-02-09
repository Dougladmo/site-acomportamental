import React from 'react'
import InputForm from './InputForm'

const EmailForm = () => {
    return (
        <form className='bg-[#BF7269] flex flex-col items-center py-10 px-5 justify-center w-full gap-5 rounded-3xl'>
            <div className='flex flex-col w-full gap-5'>
                <InputForm type='text' name='Nome' placeholder='Seu nome' />
                <InputForm type='tel' name='Telefone' placeholder='Insira seu telefone' />
                <InputForm type='email' name='E-mail' placeholder='Insira seu e-mail' />
                <InputForm type='text' name='Assunto' placeholder='Insira o assunto'  />
            </div>
            <label htmlFor="message" className='text-white text-lg flex flex-col font-[quicksand] font-medium w-10/12'>
                Mensagem
                <textarea name="" id="" className='p-4 mt-2 font-light border-2 border-white outline-0 rounded-3xl pb-14 indent-2' />
            </label>
            <button className='p-3 font-[quicksand] font-bold text-[#BF7269] bg-white rounded-3xl w-2/3' type="submit">
                Enviar
            </button>
        </form>
    )
}

export default EmailForm