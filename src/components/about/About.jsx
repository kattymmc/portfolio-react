import React from 'react'
import './About.css'
import ME from '../../assets/profile-pic.png'
import { FaAward } from 'react-icons/fa'
import CV from '../../assets/cv.pdf'

const About = () => {
  return (
    <section id='about'>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className='about__content'>
          <h3>Sobre mí</h3>
          <h2>About me</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium corporis, vero reprehenderit est laboriosam libero iste quasi autem obcaecati maiores corrupti nihil, culpa eum consequuntur. Debitis laborum molestias deleniti nesciunt?
          </p>
          <a className="btn btn-primary" href={CV} download>Download CV</a>
        </div>
      </div>
    </section>
  )
}

export default About