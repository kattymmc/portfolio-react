import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/profile-pic-head.png'
import HeaderSocials from './HeaderSocials'
import {GrLinkDown} from 'react-icons/gr'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <HeaderSocials />
        <div className='container-me'>
          <div>
            <h2>Hola! Soy</h2>
            <h1>Katherine Miraval</h1>
            <h3 className='text-light'>FULL-STACK DEVELOPER</h3>
            <p>Me considero una persona autodidacta y apasionada por la programación con
  capacidad rápida de aprendizaje. Mi objetivo es trabajar en una empresa que me permita enfrentar desafíos complejos,
  contribuir con mis habilidades y crecer profesionalmente para generar un impacto positivo en su cultura y ambiente laboral.</p>
            <CTA />
            <div className="scroll__down">
              <a href="#contact">Scroll</a> <GrLinkDown /> 
            </div>
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