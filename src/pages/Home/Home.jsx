import React, { useState } from 'react';
import PosGraduationCard from '../../components/PosGraduationCard';
import CoursesCard from '../../components/CoursesCard/CoursesCard';

const Home = () => {

  return (
    <main className='text-3xl bg-[#FFF6F2]'>
      <div
        id="hero"
        className="relative bg-[url('/hero-image.jpg')] bg-cover mt-10 bg-center h-64 flex items-center overflow-hidden"
      >
        <img src="/logo-acomportamental-hero.png" alt="logo-hero" className='z-[1] w-1/3 ml-8' />

        <div className="absolute inset-0 bg-gradient-to-t from-[#f6b0af]/98 to-transparent mt-32"></div>
      </div>
      <div id="about-us" className="relative h-64 px-5 pt-12">
        <div className="absolute inset-0 h-full bg-gradient-to-b from-[#f6b0af] to-transparent"></div>
        <div className='flex mt-5'>
          <div className='flex w-full gap-5'>
            <div className='flex items-center justify-center w-1/2 gap-5'>
              <div className="z-[1] bg-black w-16 h-48 flex items-end rounded-lg relative bg-[url('/image1.png')] bg-left">
                <p className='bg-[#BF7269] w-16 text-white text-xs text-center p-1 rounded-b-lg font-[quicksand]'>Nicole</p>
              </div>
              <div className="z-[1] bg-black w-16 h-48 flex items-end rounded-lg relative bg-[url('/image2.png')] bg-left">
                <p className='bg-[#BF7269] w-16 text-white text-xs text-center p-1 rounded-b-lg font-[quicksand]'>Fabiane</p>
              </div>
            </div>
            <div className='z-[1] flex flex-col items-end justify-center w-1/2 gap-3'>
              <h2 className='text-xl font-[quicksand] font-bold text-[#BF7269]'>
                Sobre nós
              </h2>
              <p className='text-xs text-justify'>
                Somos uma comunidade de ensino contínuo que fortalece psicólogos e acadêmicos em Ciências do Comportamento. Com uma parceria exclusiva com a Faculdade CENSUPEG, há quase 10 anos oferecemos pós-graduações presenciais e online, além de cursos livres.
              </p>
              <a href="#" className='text-white bg-[#BF7269] rounded-xl p-2 font-[quicksand] font-bold text-[10px] text-center'>
                Mais de 500 profissionais já foram capacitados conosco!
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="cursos" className='w-full mt-32'>
        <CoursesCard />
      </div>
      <div id='pos-graduacao' >
        <div className='flex flex-col gap-2 pt-12'>
          <h2 className='text-xl font-[quicksand] font-bold text-[#BF7269] px-5 mb-3'>
            Pós- graduação
          </h2>
          <p className='font-[quicksand] text-xs text-justify px-5'>
            Com quase 10 anos de parceria, a ACOMPORTAMENTAL, em colaboração exclusiva com a FACULDADE CENSUPEG, oferece três cursos de pós-graduação <span className='font-bold'>presencial e online</span> para quem busca especialização com qualidade e credibilidade.
          </p>
          <p className='font-[quicksand] text-xs text-justify px-5'>
            Escolha o formato que melhor se adapta à sua rotina: estude presencialmente ou 100% online, no seu ritmo, com conteúdo atualizado e <span className='font-bold'>certificado reconhecido</span>.
          </p>
          <p className='font-[quicksand] text-xs text-justify px-5'>
            Invista no seu crescimento profissional com quem entende do assunto!
          </p>
        </div>
        <PosGraduationCard />
      </div>
      <div id="consultas" className="relative px-5 pt-10 pb-12">
        <div className="absolute inset-0 h-full bg-gradient-to-t from-[#f6b0af] to-transparent"></div>
        <div className='flex mt-5'>
          <div className='flex w-full gap-5'>
            <div className='z-[1] flex flex-col items-start justify-center w-1/2'>
              <h2 className='text-xl font-[quicksand] font-bold text-[#BF7269] mb-5'>
                Consultas
              </h2>
              <p className='text-xs text-justify'>
                A psicoterapia é um espaço de acolhimento para lidar com emoções difíceis como ansiedade, depressão, autoestima e outros desafios.
              </p>
              <p className='text-xs text-justify'>
                Na Acomportamental, as psicólogas utilizam  Análise do Comportamento e a ACT para promover mudanças baseadas em valores.
              </p>
              <p className='text-xs text-justify'>
                Os atendimentos são de segunda a sexta (das 8h às 19h), presenciais e online para todos os públicos.
              </p>
              <a href="#" className='text-white bg-[#BF7269] rounded-xl p-2 font-[quicksand] font-bold text-[10px] text-center mt-5'>
                Agende sua sessão e inicie sua jornada de autoconhecimento.
                (91) 98644-2158
              </a>
            </div>
            <div className='flex items-center justify-center w-1/2 gap-5 z-[1]'>
              <img src="/consultas.png" alt="foto consultas" className='w-full' />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;