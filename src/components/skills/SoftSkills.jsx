import React, { useState, useEffect, useRef } from 'react'
import {RiTeamFill} from 'react-icons/ri'
import {GiBrain} from 'react-icons/gi'
import {FaBookReader} from 'react-icons/fa'

const SoftSkills = () => {
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
    <section id="softskills">
        <h3>Habilidades</h3>
        <h2>Habilidades blandas</h2>
        <div ref={ref} className={isAnimated ? 'softskills__container animated' : 'softskills__container'}>
            <div className='softskill'>
                <div className='softskill-title'>
                    <div>
                        <span>01</span>
                        <h3>Trabajo en Equipo</h3>
                    </div>
                    <div className='icon'>
                        <RiTeamFill />
                    </div>
                </div>
                <div className='softskill-text'>
                    <p>
                        La colaboración es escencial para fomentar un ambiente de aprendizaje 
                        y crecimiento constante para crear soluciones de software de calidad.
                        También permite aprovechar las fortalezas y habilidades de cada miembro del equipo para desarrollar
                        soluciones innovadoras. 
                    </p>
                </div>
            </div>
            <div className='softskill'>
                <div className='softskill-title'>
                    <div>
                        <span>02</span>
                        <h3>Rápido Aprendizaje</h3>
                    </div>
                    <div className='icon'>
                    <FaBookReader />
                    </div>
                </div>
                <div className='softskill-text'>
                    <p> Soy capaz de comprender y asimilar nuevos conceptos y tecnologías con facilidad, 
                        lo que me permite adaptarme rápidamente a los requisitos y desafíos del proyecto.
                        Soy una apasionada por mantenerme actualizada en las últimas tecnologías del mercado en un entorno altamente cambiante.
                    </p>
                </div>
            </div>
            <div className='softskill'>
                <div className='softskill-title'>
                    <div>
                        <span>03</span>
                        <h3>Pensamiento analítico</h3>
                    </div>
                    <div className='icon'>
                    <GiBrain />
                    </div>
                </div>
                <div className='softskill-text'>
                    <p>
                        Mi habilidad para analizar y descomponer problemas complejos en tareas más manejables me 
                        permite desarrollar soluciones efectivas y eficientes para los clientes.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SoftSkills