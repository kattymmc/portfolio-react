import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { GoThreeBars } from 'react-icons/go'
import { MdOutlineClose } from 'react-icons/md'
import './Navbar.css'
import Logo from '../../assets/logo-rosa-removebg.png'
import { links } from '../../data';

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  let location = useLocation();

  const changeBackground = () => {
    if(window.scrollY >= 100) {
      setIsAtTop(false);
    } else {
      setIsAtTop(true);
    }
  }

  const scrollUp  = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <nav>
      <div className={`container nav__container ${isAtTop ? '' : 'nav__container-active'}`}>
        <Link to="/" className='logo' onClick={scrollUp}>
          <img src={Logo} alt="Nav logo"/>
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav' }`}>
          {
            links.map(({name, path}, index) => {
              return (
                <li key={index}>
                  <HashLink smooth to={path} className={`${location.hash}` === path ? "active-nav" : ""}>{name}</HashLink>
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