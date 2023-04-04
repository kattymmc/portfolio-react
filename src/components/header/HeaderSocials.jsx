import React from 'react'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="" target="_blank"><BsLinkedin /></a>
        <a href="" target="_blank"><FaGithub /></a>
        <a href="" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials