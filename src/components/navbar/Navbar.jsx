import React, { useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { GoThreeBars } from 'react-icons/go'
import { MdOutlineClose } from 'react-icons/md'
import './Navbar.css'
import Logo from '../../assets/logo-rosa-removebg.png'
import SpainIcon from '../../assets/icon-spain.png';
import EnglishIcon from '../../assets/icon-en.png';
import { links } from '../../data';
import { FormattedMessage } from 'react-intl';
import { langContext } from '../../context/langContext'

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const language = useContext(langContext);
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
        <div class="nav_links__container">
          <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav' }`}>
            {
              links.map(({name, path}, index) => {
                return (
                  <li key={index}>
                    <HashLink smooth to={path} className={`${location.hash}` === path ? "active-nav" : ""}><FormattedMessage id={`menu.${name}`} /></HashLink>
                  </li>
                )
              })
            }
            
          </ul>
          <div className='flag__container'>
            <div className='lang-flag' onClick={() => language.setLanguage('es-ES') }><img src={SpainIcon} alt="Spanish"/></div>
            <div className='lang-flag' onClick={() => language.setLanguage('en-US') }><img src={EnglishIcon} alt="English"/></div>
          </div>
          <button className='nav__toggle-btn' onClick={() => setIsNavShowing(!isNavShowing)}>
            {
              isNavShowing ? <MdOutlineClose /> : <GoThreeBars />
            }
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar