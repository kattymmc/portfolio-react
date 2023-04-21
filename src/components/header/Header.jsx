import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me-transparent.png'
import HeaderSocials from './HeaderSocials'
import { FormattedMessage } from 'react-intl';
// import {GrLinkDown} from 'react-icons/gr'

function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <HeaderSocials />
        <div className='container-me'>
          <div>
            <h2><FormattedMessage id='header.subtitle' /></h2>
            <h1>Katherine Miraval</h1>
            <div className='text-light-container'>
              <p className='text-light'>FULL-STACK DEVELOPER</p>
            </div>
            <p><FormattedMessage id='header.description' /></p>
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