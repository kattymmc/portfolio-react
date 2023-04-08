import React from 'react'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/katherine-miraval/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/kattymmc" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/kattymmc/" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials