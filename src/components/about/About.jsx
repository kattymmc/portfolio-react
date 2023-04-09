import React, {useEffect, useState, useRef} from 'react'
import './About.css'
import ME from '../../assets/profile-pic.png'
import CV from '../../assets/cv.pdf'

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
          <h3>Sobre mí</h3>
          <h2>Katherine Miraval</h2>
          <p>
            Estudié Ingeniería de Sistemas en la Universidad Nacional Mayor de San Marcos. Tengo 2 años de experiencia
            en el desarrollo de Sistemas web enfocados al rubro de ERP y Facturación Electrónica utilizando tecnologías como React y Javascript.
            También estuve 1 año trabajando en el área de desarrollo de mi universidad desarrollando sistemas web para las áreas administrativas 
            utilizando Spring Boot. Soy una persona empática y entusiasta, con competencias enfocadas en el trabajo en equipo, comunicación asertiva, resolución de problemas, 
            responsable y proactiva, me gusta aprender de los demás y superarme continuamente.
          </p>
          <a className="btn btn-primary" href={CV} download>Download CV</a>
        </div>
      </div>
    </section>
  )
}

export default About