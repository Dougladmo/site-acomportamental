import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import InputForm from './InputForm';

const EmailForm = () => {
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        email: '',
        assunto: '',
        mensagem: '',
    });

    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true)

        emailjs.send(
            'service_6i59jps',  // service ID
            'template_arvhhdo',  // template ID
            formData,
            'WJMbfOYkRQzyiCG6T'   // public key
        )
            .then(() => {
                setIsLoading(false)
                setIsSent(true); // Mostra o vídeo de "done"
                setTimeout(() => {
                    setIsSent(false); // Retorna o formulário ao estado normal após 3 segundos
                    setFormData({ nome: '', telefone: '', email: '', assunto: '', mensagem: '' });
                }, 3000);
            })
            .catch((error) => {
                alert('Erro ao enviar e-mail. Tente novamente.');
                console.error('Erro:', error);
            });
    };

    return (
        <form onSubmit={sendEmail} className='bg-[#BF7269] flex flex-col items-center py-5 px-5 justify-center w-72 gap-5 rounded-3xl'>
            {isSent ? (
                <div className="flex flex-col items-center">
                    <video autoPlay playsInline onEnded={() => setIsSent(false)} className="w-24">
                        <source src="/done-animation.webm" type="video/webm" />
                    </video>
                    <p className="mt-2 text-white font-bold font-[quicksand]">E-mail enviado com sucesso!</p>
                </div>
            ) : (
                <>
                    <div className='grid w-64 grid-cols-2 gap-5 px-5 text-xs placeholder:text-xs'>
                        <InputForm handleOnChange={handleChange} type='text' name='nome' placeholder='Seu nome' />
                        <InputForm handleOnChange={handleChange} type='tel' name='telefone' placeholder='Insira seu telefone' />
                        <InputForm handleOnChange={handleChange} type='email' name='email' placeholder='Insira seu e-mail' />
                        <InputForm handleOnChange={handleChange} type='text' name='assunto' placeholder='Insira o assunto' />
                    </div>
                    <label htmlFor="message" className='text-white text-md text-xs flex flex-col font-[quicksand] font-medium w-64 px-5'>
                        Mensagem
                        <textarea onChange={handleChange} name="mensagem" id="message" className='p-4 mt-2 font-light border-2 border-white outline-0 rounded-3xl pb-7 indent-2' />
                    </label>
                    <button
                        className='p-2 font-[quicksand] hover:bg-transparent hover:text-white hover:border-white border transition duration-300 cursor-pointer text-xs font-bold text-[#BF7269] bg-white rounded-3xl w-2/3 flex items-center justify-center'
                        type="submit"
                        disabled={isLoading} 
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-white border-t-[#BF7269] rounded-full animate-spin"></div>
                        ) : (
                            "Enviar"
                        )}
                    </button>
                </>
            )}
        </form>
    );
};

export default EmailForm;
