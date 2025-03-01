import React from 'react'
import FooterLink from '../FooterLink'
import EmailForm from '../EmailForm'

import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className='bg-[#FFF6F2] px-5 pt-10 pb-3 mx-auto max-w-7xl'>
      <div className='flex flex-col w-full sm:justify-between sm:flex-row'>
        <div className='w-1/2'>
          <a href='#' className='flex flex-col items-start'>
            <img src="/logo-footer.png" alt="logo acomportamental footer" className='w-16' />
            <span className='text-[#BF7269] text-lg font-semibold font-[quicksand]'>Acomportamental</span>
          </a>
          <ul className='flex flex-col gap-1 pl-1 py-2 font-[quicksand]'>
            <li>
              <FooterLink offset={0} link='hero' title='Home' />
            </li>
            <li>
              <FooterLink offset={-180} link='about-us' title='Sobre nós' />
            </li>
            <li>
              <FooterLink offset={-200} link='cursos' title='Cursos' />
            </li>
            <li>
              <FooterLink offset={-130} link='pos-graduacao' title='Pós-graduação' />
            </li>
            <li>
              <FooterLink offset={-100} link='consultas' title='Consultas' />
            </li>
            <li>
              <FooterLink offset={-60} link='contact' title='Fale conosco' />
            </li>
          </ul>
        </div>
        <div id='contact' className='flex flex-col items-center justify-start w-full mt-4 sm:items-end md:items-end md:mt-0 lg:w-1/2'>
          <div className='flex flex-col items-center'>
            <p className='my-3 md:mt-0 text-xl font-semibold font-[quicksand]'>Entre em contato</p>
            <EmailForm />
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between w-full gap-5 py-5 md:mt-12 md:mb-5'>
        <div className='font-[quicksand] text-sm lg:text-lg flex flex-col gap-2 lg:w-1/2 lg:h-full'>
          <p>
            Endereço
          </p>
          <p>
            Rua Diogo Moia, 1114.
          </p>
          <p>
            Bairro: Umarizal, Belém, PA
          </p>
          <p className='font-bold'>
            Telefone: (91) 98644-2158
          </p>
        </div>
        <div className='flex flex-col items-center md:items-end justify-center font-[quicksand] lg:w-1/2'>
          <div className='flex flex-col items-center gap-2'>
            <p className='self-center mt-1 text-lg'>Onde estamos</p>
            <figure className="w-full md:h-64 rounded-xl">
              <figcaption className="mb-2 font-bold text-center">Local da A Comportamental</figcaption>
              <iframe
                className="w-full md:h-64 rounded-xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5549453707085!2d-48.48179802503401!3d-1.4419116985445037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48c2a176c92a5%3A0xeb35f39b88d68e6d!2sA%20Comportamental%20-%20ci%C3%AAncia%20%26%20comportamento!5e0!3m2!1spt-BR!2sbr!4v1739138062570!5m2!1spt-BR!2sbr"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </figure>

          </div>
        </div>
      </div>
      <div className='flex gap-3 my-5 md:gap-5'>
        <a aria-label="social media link" target='_blank' href="https://wa.me/+5591986442158?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Acomportamental%20e%20as%20vagas%20de%20turmas%20disponíveis.%20Pode%20me%20informar%20sobre%20as%20próximas%20turmas%20e%20como%20me%20inscrever?%20😊">
          <FaWhatsapp className='bg-[#BF7269] text-white cursor-pointer p-2 rounded-full hover:bg-transparent hover:border hover:border-[#BF7269] transition duration-300 hover:text-[#BF7269]' size={40} />
        </a>
        <a aria-label="social media link" target='_blank' href="https://www.instagram.com/acomportamental/">
          <FaInstagram className='bg-[#BF7269] text-white cursor-pointer p-2 rounded-full hover:bg-transparent hover:border hover:border-[#BF7269] transition duration-300 hover:text-[#BF7269]' size={40} />
        </a>
        <a aria-label="social media link" target='_blank' href="https://www.facebook.com/share/1KQB9n5dyA/?mibextid=wwXIfr">
          <FaFacebookF className='bg-[#BF7269] text-white cursor-pointer p-2 rounded-full hover:bg-transparent hover:border hover:border-[#BF7269] transition duration-300 hover:text-[#BF7269]' size={40} />
        </a>
        <a aria-label="social media link" target='_blank' href="https://www.linkedin.com/company/a-comportamental/">
          <CiLinkedin className='bg-[#BF7269] text-white cursor-pointer p-2 rounded-full hover:bg-transparent hover:border hover:border-[#BF7269] transition duration-300 hover:text-[#BF7269]' size={40} />
        </a>
        <a aria-label="social media link" target='_blank' href="mailto:acomportamental@gmail.com">
          <MdEmail className='bg-[#BF7269] text-white cursor-pointer p-2 rounded-full hover:bg-transparent hover:border hover:border-[#BF7269] transition duration-300 hover:text-[#BF7269]' size={40} />
        </a>
      </div>
      <div className='flex flex-col gap-1 font-[quicksand]'>
        {/* <div className='flex items-center mb-1 text-xs md:text-sm'>
          <a href="#" className='pr-2 border-r'>Políticas de privacidade</a>
          <a href="#" className='pl-2'>Termos de uso</a>
        </div> */}
        <p className='mb-1 text-xs md:text-sm'>
          &copy; 2025 Acomportamental. Todos os direitos reservados.
        </p>
        <div className='flex items-center gap-1 mt-1'>
          <span className='text-xs'>Site desenvolvidor por: </span>
          <img className='w-24' src="/logo-nobuggy.png" alt="logo da nobuggy" />
        </div>
      </div>
    </footer>
  )
}

export default Footer