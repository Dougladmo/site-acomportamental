import React, { useState } from 'react';

import PosGraduationCard from '../../components/PosGraduationCard';
import CoursesCard from '../../components/CoursesCard/CoursesCard';
import AnimatedAbout from '../../components/AnimatedAbout'

const Home = () => {

  return (
    <main className='text-3xl bg-[#FFF6F2]'> 
      <div
        id="hero"
        className="relative bg-[url('/hero-image.jpg')] bg-cover mt-10 bg-center h-64 flex items-center overflow-hidden md:h-[45vh]"
      >
        <img src="/logo-acomportamental-hero.svg" alt="logo-hero" className='z-[1] w-1/3 ml-8' />

        <div className="absolute inset-0 bg-gradient-to-t from-[#f6b0af]/98 to-transparent mt-32"></div>
      </div>
      <div id="about-us" className="relative h-64 px-5 pt-12 md:pt-24 md:pr-8">
        <div className="absolute inset-0 h-full bg-gradient-to-b from-[#f6b0af] to-transparent"></div>
        <div className='flex mt-5'>
            <AnimatedAbout />
        </div>
      </div>
      <div id="cursos" className='w-full mt-42 md:mt-80'>
        <CoursesCard />
      </div>
      <div id='pos-graduacao' >
        <div className='flex flex-col gap-2 pt-12'>
          <h2 className='text-xl font-[quicksand] font-bold text-[#BF7269] px-5 mb-3'>
            Pós-graduação
          </h2>
          <p className='font-[quicksand] text-sm text-justify px-5'>
            Com quase 10 anos de parceria, a ACOMPORTAMENTAL, em colaboração exclusiva com a FACULDADE CENSUPEG, oferece três cursos de pós-graduação <span className='font-bold'>presencial e online</span> para quem busca especialização com qualidade e credibilidade.
          </p>
          <p className='font-[quicksand] text-sm text-justify px-5'>
            Escolha o formato que melhor se adapta à sua rotina: estude presencialmente ou 100% online, no seu ritmo, com conteúdo atualizado e <span className='font-bold'>certificado reconhecido</span>.
          </p>
          <p className='font-[quicksand] text-sm text-justify px-5'>
            Invista no seu crescimento profissional com quem entende do assunto!
          </p>
        </div>
        <PosGraduationCard />
      </div>
      <div id="consultas" className="relative px-5 pt-10 pb-12">
        <div className="absolute inset-0 h-full bg-gradient-to-t from-[#f6b0af] to-transparent"></div>
        <div className='flex flex-col w-full gap-5 items-'>
          <h2 className='text-xl font-[quicksand] font-bold text-[#BF7269]'>
            Consultas
          </h2>
          <div className='w-full rounded-xl mb-2 h-60 gap-5 z-[1] bg-cover bg-[url("/image3.jpg")] bg-center'>
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
      </div>
    </main>
  );
};

export default Home;