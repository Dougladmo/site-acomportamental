import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Fade, Slide } from 'react-awesome-reveal'

import PosGraduationCard from '../../components/PosGraduationCard';
import MobileCoursesCard from '../../components/CoursesCard/MobileCoursesCard';
import CoursesCard from '../../components/CoursesCard/CoursesCard';
import MobileConsultasSection from '../../components/MobileConsultasSection'
import MobileAnimatedAbout from '../../components/MobileAnimatedAbout';

export const about = [
  {
    name: 'nicole',
    text: "Psicóloga e Mestra em Pesquisa e Teoria do Comportamento pela UFPA, com especialização em Filosofia da Educação e Terapia de Aceitação e Compromisso (ACT). Possui ampla experiência na área acadêmica, atuando como docente e supervisora universitária. Além disso, exerce a função de diretora da ACOMPORTAMENTAL, contribuindo para a qualificação de profissionais e o desenvolvimento da Psicologia baseada na ciência comportamental.",
    bgImg: 'bg-[url("/image-nicole.webp")]',
  },
  {
    name: 'fabiane',
    text: "Psicóloga, Mestra e Doutora em Pesquisa e Teoria do Comportamento pela UFPA, com especialização em Terapia de Aceitação e Compromisso (ACT). Atua como docente e supervisora universitária, compartilhando seu conhecimento e experiência na formação de novos profissionais. Além disso, desempenha o papel de diretora da ACOMPORTAMENTAL, contribuindo para o avanço da Psicologia e da qualificação profissional na área.",
    bgImg: 'bg-[url("/image-fabiane.webp")]',
  },
  {
    name: 'brand',
    text: "Desde 2016, na cidade de Belém, a ACOMPORTAMENTAL tem se dedicado a oferecer qualificação profissional para estudantes e profissionais da Psicologia e áreas afins. Com um trabalho fundamentado na ciência comportamental, buscamos promover o desenvolvimento pessoal e profissional por meio de cursos e capacitações. Nosso compromisso é proporcionar um ambiente acolhedor e enriquecedor, onde o aprendizado se torna uma experiência transformadora, permitindo o crescimento contínuo e a ampliação de conhecimentos para uma atuação mais qualificada e eficaz.",
  },
];

const Home = () => {
  const [visibleItem, setVisibleItem] = useState('brand');

  const handleClick = (item) => {
    setVisibleItem(visibleItem === item ? 'brand' : item);
  };

  return (
    <main className='text-3xl bg-[#FFF6F2]'>
      <div
        id="hero"
        className="relative bg-[url('/foto-hero.webp')] bg-cover bg-center mt-10 h-64 flex items-center overflow-hidden md:h-[45vh] lg:h-[80vh]"
      >
        <Fade duration={1000} className='z-[1] w-full max-w-7xl'>
          <img src="/logo-acomportamental-hero.svg" alt="logo-hero" className='z-[1] w-1/3 ml-8 lg:w-1/2 lg:ml-0 xl:ml-32' />
        </Fade>

        <div className="absolute inset-0 bg-gradient-to-t from-[#f6b0af]/98 to-transparent mt-32"></div>
      </div>
      <Fade duration={1000} triggerOnce>
        <div id="about-us" className="relative px-5 pt-12 md:pt-24 md:pr-8">
          <div className="absolute inset-0 h-full bg-gradient-to-b from-[#f6b0af] to-transparent"></div>
          <div className='hidden mx-auto mt-5 md:flex max-w-7xl'>
            <div className='flex w-full gap-5 md:h-full lg:justify-center md:justify-between'>
              <div className='flex items-center justify-center w-1/2 gap-2 lg:mr-48'>
                {about
                  .filter((item) => item.name !== 'brand')
                  .map((item, index) => (
                    <motion.div
                      key={index}
                      onClick={() => handleClick(item.name)}
                      initial={{ width: "7rem" }}
                      animate={{ width: visibleItem === item.name ? "16rem" : "7rem" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`z-[1] h-48 md:h-[400px] flex items-center justify-center cursor-pointer rounded-lg relative bg-cover bg-center lg:${item.bgImg} bg-[#BF7269] 
                            ${visibleItem === item.name ? `items-end ${item.bgImg} md:h-[500px]` : `${item.bgImg} bg-left`}`}
                    >
                      <p className={`bg-[#BF7269] w-full text-white text-base md:text-2xl rounded-b-lg text-center p-1 font-[quicksand] transition-transform duration-300 flex items-center justify-center 
                            ${visibleItem !== item.name ? "-rotate-90 md:rotate-0 md:self-end md:p-4 md:bg-[#BF7269] tracking-wider h-0 md:text-lg" : ""}`}>
                        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                      </p>
                    </motion.div>
                  ))}
              </div>
              <div className='z-[1] flex flex-col items-end justify-center w-1/2 md:gap-5'>
                <h2 className='text-xl md:text-5xl font-[quicksand] font-bold text-[#BF7269]'>
                  Sobre Nós
                </h2>
                <Fade duration={1500}>
                  <Slide direction='right'>
                    <p className='my-8 text-xs text-justify md:text-xl'>
                      {about.find((item) => item.name === visibleItem)?.text}
                    </p>
                  </Slide>
                </Fade>
                <a href="https://wa.me/+5591986442158?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Acomportamental%20e%20as%20vagas%20de%20turmas%20disponíveis.%20Pode%20me%20informar%20sobre%20as%20próximas%20turmas%20e%20como%20me%20inscrever?%20😊" target='_blank' className='text-white bg-[#BF7269] hover:bg-transparent border transition duration-300 hover:border-[#BF7269] lg:p-5 hover:text-[#BF7269] rounded-xl p-2 font-[quicksand] font-bold text-[10px] text-center md:text-sm'>
                  Mais de 500 profissionais já foram capacitados conosco!
                </a>
              </div>
            </div>
          </div>
          <MobileAnimatedAbout />
        </div>
        <div id="cursos" className='w-full px-1 mb-16 md:px-0 mt-36'>
          <div className='w-full md:hidden'>
            <MobileCoursesCard />
          </div>
          <div className='hidden md:flex md:w-full'>
            <CoursesCard />
          </div>
        </div>
        <div id='pos-graduacao' className='w-full mx-auto max-w-7xl lg:mt-32' >
          <div className='flex flex-col gap-2 pt-12 md:max-w-5xl md:mx-auto'>
            <h2 className='text-xl font-[quicksand] md:text-3xl font-bold text-[#BF7269] px-5 mb-3'>
              Pós-graduação
            </h2>
            <p className='font-[quicksand] md:text-base text-sm text-justify px-5'>
              Com quase 10 anos de parceria, a ACOMPORTAMENTAL, em colaboração exclusiva com a FACULDADE CENSUPEG, oferece três cursos de pós-graduação <span className='font-bold'>presencial e online</span> para quem busca especialização com qualidade e credibilidade.
            </p>
            <p className='font-[quicksand] text-sm md:text-base text-justify px-5'>
              Escolha o formato que melhor se adapta à sua rotina: estude presencialmente ou 100% online, no seu ritmo, com conteúdo atualizado e <span className='font-bold'>certificado reconhecido</span>.
            </p>
            <p className='font-[quicksand] text-sm md:text-base text-justify px-5'>
              Invista no seu crescimento profissional com quem entende do assunto!
            </p>
          </div>
          <PosGraduationCard />
        </div>
        <div id="consultas" className="relative w-full px-5 pt-10 pb-12 mt-36 lg:pb-36">
          <div className="absolute inset-0 h-full bg-gradient-to-t from-[#f6b0af] to-transparent"></div>
          <MobileConsultasSection />
          <div className='hidden w-full gap-8 lg:flex lg:justify-center lg:gap-5 md:max-w-6xl md:mx-auto h-80'>
            <div className='z-[1] flex flex-col items-start justify-center w-1/2 font-[quicksand]'>
              <h2 className='text-3xl mb-5 font-[quicksand] font-bold text-[#BF7269]'>
                Consultas
              </h2>
              <p className='max-w-xl text-sm text-justify md:max-w-lg md:text-base'>
                A psicoterapia é um espaço de acolhimento para lidar com emoções difíceis como ansiedade, depressão, autoestima e outros desafios.
              </p>
              <p className='max-w-xl text-sm text-justify md:max-w-lg md:text-base'>
                Na Acomportamental, as psicólogas utilizam  Análise do Comportamento e a ACT para promover mudanças baseadas em valores.
              </p>
              <p className='max-w-xl text-sm text-justify md:max-w-lg md:text-base'>
                Os atendimentos são de <span className='font-bold'>segunda a sexta (das 8h às 19h),</span> presenciais e online para todos os públicos.
              </p>
              <a href="https://wa.me/+5591986442158?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20as%20consultas%20da%20Acomportamental.%20Pode%20me%20ajudar?%20😊" target='_blank' className='text-white bg-[#BF7269] hover:border hover:text-black hover:border-[#BF7269] transition duration-300 hover:bg-transparent rounded-xl px-6 py-4 font-[quicksand] font-bold text-sm text-center mt-5 lg:w-2/3 lg:ml-20'>
                Agende sua sessão e inicie sua jornada de autoconhecimento clicando aqui.
              </a>
            </div>
            <div className='w-1/3 rounded-xl mb-2 gap-5 z-[1] bg-cover bg-[url("/image3.webp")] bg-top'>
            </div>
          </div>
        </div>
      </Fade>
    </main>
  );
};

export default Home;