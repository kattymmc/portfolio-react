import React, {useEffect, useState, useRef} from 'react'
import './About.css'
import ME from '../../assets/profile-pic.png'
import CV from '../../assets/newCV.pdf'
import { FormattedMessage } from 'react-intl';

const About = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const ref = useRef();
  
  useEffect(() => {
      const node = ref.current;
      const observer = new IntersectionObserver((entry) => {
          if(entry[0].isIntersecting) {
              setIsAnimated(true)
          } else {
              setIsAnimated(false)
          }
      });

      if(node) {
          observer.observe(node);
      }

      return () => {
          if(node) {
              observer.unobserve(node)
          }
      }

  }, [ref])

  return (
    <section id='about'>
      <div ref={ref} className={isAnimated ? 'container about__container animated-x' : 'container about__container'} >
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className='about__content'>
          <h3><FormattedMessage id='about.subtitle'/></h3>
          <h2>Katherine Miraval</h2>
          <p><FormattedMessage id='about.description'/></p>
          <a className="btn btn-primary" href={CV} download><FormattedMessage id='about.button'/></a>
        </div>
      </div>
    </section>
  )
}

export default About