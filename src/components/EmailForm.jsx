import React from 'react'
import InputForm from './InputForm'

const EmailForm = () => {
    return (
        <form className='bg-[#BF7269] flex flex-col gap-5 p-10 rounded-3xl'>
            <div className='flex gap-5'>
                <InputForm type='text' name='Nome' placeholder='Seu nome' />
                <InputForm type='tel' name='Telefone' placeholder='Insira seu telefone' />
            </div>
            <div className='flex gap-5'>
                <InputForm type='email' name='E-mail' placeholder='Insira seu e-mail' />
                <InputForm type='text' name='Assunto' placeholder='Insira o assunto'  />
            </div>
            <label htmlFor="message" className='text-white text-lg flex flex-col font-[quicksand] font-medium'>
                Mensagem
                <textarea name="" id="" className='p-4 mt-2 font-light border-2 border-white outline-0 rounded-3xl pb-14 indent-2' />
            </label>
            <button className='p-3 font-[quicksand] font-bold text-[#BF7269] bg-white rounded-3xl' type="submit">
                Enviar
            </button>
        </form>
    )
}

export default EmailForm