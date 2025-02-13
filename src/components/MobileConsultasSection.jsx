import React from 'react'

const MobileConsultasSection = () => {
    return (
        <div className='flex mx-auto max-w-7xl lg:hidden'>
            <div className='z-[1] flex flex-col items-center justify-center sm:max-w-lg mx-auto w-full font-[quicksand]'>
            <h2 className='text-xl sm:text-2xl self-start mb-3 gap-1 sm:mb-3 font-[quicksand] font-bold text-[#BF7269]'>
                Consultas
            </h2>
            <div className='w-full max-w-lg rounded-xl mb-2 h-72 gap-5 z-[1] bg-cover bg-[url("/image3.webp")] bg-center'>
            </div>
                <p className='max-w-xl text-sm text-justify sm:text-base'>
                    A psicoterapia é um espaço de acolhimento para lidar com emoções difíceis como ansiedade, depressão, autoestima e outros desafios.
                </p>
                <p className='max-w-xl text-sm text-justify sm:text-base'>
                    Na Acomportamental, as psicólogas utilizam  Análise do Comportamento e a ACT para promover mudanças baseadas em valores.
                </p>
                <p className='max-w-xl text-sm text-justify sm:text-base'>
                    Os atendimentos são de <span className='font-bold'>segunda a sexta (das 8h às 19h),</span> presenciais e online para todos os públicos.
                </p>
                <a href="https://wa.me/+5591986442158?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20as%20consultas%20da%20Acomportamental.%20Pode%20me%20ajudar?%20😊" target='_blank' className='text-white bg-[#BF7269] hover:border hover:text-black hover:border-[#BF7269] transition duration-300 hover:bg-transparent rounded-xl px-6 py-4 font-[quicksand] w-2/3 sm:w-1/2 font-bold text-sm text-center mt-5'>
                    Agende sua sessão e inicie sua jornada de autoconhecimento clicando aqui.
                </a>
            </div>
        </div>
    )
}

export default MobileConsultasSection