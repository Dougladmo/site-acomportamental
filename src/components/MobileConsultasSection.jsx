import React from 'react'

const MobileConsultasSection = () => {
    return (
        <div className='flex flex-col w-full gap-5 mx-auto max-w-7xl lg:hidden'>
            <h2 className='text-xl font-[quicksand] font-bold text-[#BF7269]'>
                Consultas
            </h2>
            <div className='w-full rounded-xl mb-2 h-60 gap-5 z-[1] bg-cover bg-[url("/image3.webp")] bg-center'>
            </div>
            <div className='z-[1] flex flex-col items-start justify-center w-full font-[quicksand]'>
                <p className='text-sm text-justify'>
                    A psicoterapia é um espaço de acolhimento para lidar com emoções difíceis como ansiedade, depressão, autoestima e outros desafios.
                </p>
                <p className='text-sm text-justify'>
                    Na Acomportamental, as psicólogas utilizam  Análise do Comportamento e a ACT para promover mudanças baseadas em valores.
                </p>
                <p className='text-sm text-justify'>
                    Os atendimentos são de <span className='font-bold'>segunda a sexta (das 8h às 19h),</span> presenciais e online para todos os públicos.
                </p>
                <a href="https://wa.me/+5591986442158?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20as%20consultas%20da%20Acomportamental.%20Pode%20me%20ajudar?%20😊" target='_blank' className='text-white bg-[#BF7269] hover:border hover:text-black hover:border-[#BF7269] transition duration-300 hover:bg-transparent rounded-xl px-6 py-4 font-[quicksand] font-bold text-sm text-center mt-5'>
                    Agende sua sessão e inicie sua jornada de autoconhecimento clicando aqui.
                </a>
            </div>
        </div>
    )
}

export default MobileConsultasSection