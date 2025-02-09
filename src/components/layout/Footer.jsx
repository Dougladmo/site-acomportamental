import React from 'react'
import FooterLink from '../FooterLink'
import EmailForm from '../EmailForm'

import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footerr = () => {
  return (
    <footer className='bg-[#FFF6F2] px-5 pt-10 pb-5'>
      <div className='flex'>
        <div>
          <a href='#' className='flex flex-col items-start'>
            <img src="/logo-footer.png" alt="logo acomportamental footer" className='w-16' />
            <span className='text-[#BF7269] text-lg font-semibold font-[quicksand]'>Acomportamental</span>
          </a>
          <ul className='flex flex-col gap-1 pl-1 py-2 font-[quicksand]'>
            <li>
              <FooterLink link='https://github.com/dougladmo' title='Home' />
            </li>
            <li>
              <FooterLink link='https://github.com/dougladmo' title='Sobre nós' />
            </li>
            <li>
              <FooterLink link='https://github.com/dougladmo' title='Cursos' />
            </li>
            <li>
              <FooterLink link='https://github.com/dougladmo' title='Pós-graduação' />
            </li>
            <li>
              <FooterLink link='https://github.com/dougladmo' title='Consultas' />
            </li>
            <li>
              <FooterLink link='https://github.com/dougladmo' title='Blog' />
            </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col items-center justify-start mt-4'>
        <p className='my-3 text-xl font-semibold font-[quicksand]'>Entre em contato</p>
        <EmailForm />
      </div>
      <div className='flex items-center justify-center w-full gap-5 py-5'>
        <div className='font-[quicksand] text-sm flex flex-col gap-2'>
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
        <div className='flex flex-col items-center justify-center font-[quicksand] w-1/2'>
          <p className='mt-1 text-lg'>Onde estamos</p>
          <iframe className='w-full rounded-xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5549453707085!2d-48.48179802503401!3d-1.4419116985445037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48c2a176c92a5%3A0xeb35f39b88d68e6d!2sA%20Comportamental%20-%20ci%C3%AAncia%20%26%20comportamento!5e0!3m2!1spt-BR!2sbr!4v1739138062570!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
        <div className='flex gap-3 my-5'>
          <FaWhatsapp className='bg-[#BF7269] text-white p-2 rounded-full hover:bg-transparent hover:border hover:border-[#BF7269] transition duration-300 hover:text-[#BF7269]' size={40}/>
          <FaInstagram  className='bg-[#BF7269] text-white p-2 rounded-full hover:bg-transparent hover:border hover:border-[#BF7269] transition duration-300 hover:text-[#BF7269]' size={40}/>
          <FaFacebookF  className='bg-[#BF7269] text-white p-2 rounded-full hover:bg-transparent hover:border hover:border-[#BF7269] transition duration-300 hover:text-[#BF7269]' size={40}/>
          <CiLinkedin  className='bg-[#BF7269] text-white p-2 rounded-full hover:bg-transparent hover:border hover:border-[#BF7269] transition duration-300 hover:text-[#BF7269]' size={40}/>
          <MdEmail  className='bg-[#BF7269] text-white p-2 rounded-full hover:bg-transparent hover:border hover:border-[#BF7269] transition duration-300 hover:text-[#BF7269]' size={40}/>
        </div>
        <div className='flex flex-col gap-1 font-[quicksand]'>
          <div className='flex items-center mb-1 text-sm'>
            <a href="#" className='pr-2 border-r'>Políticas de privacidade</a>
            <a href="#" className='pl-2'>Termos de uso</a>
          </div>
          <p className='mb-1 text-sm'>
            &copy; 2025 Acomportamental. Todos os direitos reservados.
          </p>
          <div className='flex items-center'>
            <span>Site desenvolvidor por: </span>
            <img className='w-24' src="/logo-nobuggy.png" alt="logo da nobuggy" />
          </div>
        </div>
    </footer>
  )
}

export default Footerr