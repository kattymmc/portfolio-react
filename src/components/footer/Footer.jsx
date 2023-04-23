import React from 'react'
import './Footer.css'
import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'
import { FormattedMessage } from 'react-intl';

function Footer() {
  return (
    <div id="footer" className='footer'>
      <div className='footer-social'>
        <a href="https://www.linkedin.com/in/katherine-miraval/" target='_blank' rel="noreferrer"><FaLinkedinIn /></a>
        <a href="https://github.com/kattymmc" target='_blank' rel="noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/kattymmc/" target='_blank' rel="noreferrer"><FaInstagram /></a>
      </div>
      <div className='footer-text'>
        <FormattedMessage id='footer.description' />
      </div>
    </div>
  )
}

export default Footer