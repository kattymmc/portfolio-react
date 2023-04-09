import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me-transparent.png'
import HeaderSocials from './HeaderSocials'
// import {GrLinkDown} from 'react-icons/gr'

function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <HeaderSocials />
        <div className='container-me'>
          <div>
            <h2>Hola! Soy</h2>
            <h1>Katherine Miraval</h1>
            <div className='text-light-container'>
              <p className='text-light'>FULL-STACK DEVELOPER</p>
            </div>
            <p>Egresada de Ingeniería de sistemas y enfocada al desarrollo Full-stack. 
              Mi objetivo profesional es crear soluciones innovadoras y eficientes para contribuir
              al éxito del negocio. Estoy dispuesta a colaborar en proyectos complejos y desafiantes 
              que me permitan crecer profesionalmente y crear un impacto positivo en la sociedad.</p>
            <CTA />
            {/*<div className="scroll__down">
              <a href="#contact">
                Ir abajo <GrLinkDown />
              </a>
            </div>*/}
          </div>
          
          <div className='me'>
            <img src={ME} alt="me"/>
          </div>
        </div>
      
      </div>
    </header>
  )
}

export default Header