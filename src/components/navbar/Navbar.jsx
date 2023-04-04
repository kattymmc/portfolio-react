import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GoThreeBars } from 'react-icons/go'
import { MdOutlineClose } from 'react-icons/md'
import './Navbar.css'
import Logo from '../../assets/logo-rosa-removebg.png'
import { links } from '../../data';

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const changeBackground = () => {
    if(window.scrollY >= 100) {
      setIsAtTop(false);
    } else {
      setIsAtTop(true);
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <nav>
      <div className={`container nav__container ${isAtTop ? '' : 'nav__container-active'}`}>
        <Link to="/" className='logo'>
          <img src={Logo} alt="Nav logo"/>
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav' }`}>
          {
            links.map(({name, path}, index) => {
              return (
                <li key={index}>
                  <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}>{name}</NavLink>
                </li>
              )
            })
          }
        </ul>
        <button className='nav__toggle-btn' onClick={() => setIsNavShowing(!isNavShowing)}>
          {
            isNavShowing ? <MdOutlineClose /> : <GoThreeBars />
          }
        </button>
      </div>
    </nav>
  )
}

export default Navbar