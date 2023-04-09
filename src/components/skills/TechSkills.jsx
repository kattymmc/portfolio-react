import React, {useState, useRef, useEffect} from 'react'
import {FaHtml5, FaCss3Alt, FaReact, FaAngular, FaBootstrap, FaNodeJs, FaJava, FaPython, FaGitAlt} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {SiTypescript, SiSpringboot, SiCplusplus, SiMysql, SiMongodb, SiOracle, SiPostman, SiVisualstudiocode} from 'react-icons/si'

const TechSkills = () => {
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
    <section id="techskills">
        <h3>Habilidades</h3>
        <h2>Habilidades técnicas</h2>
        <div ref={ref} className={isAnimated ? 'techskills__container animated-x' : 'techskills__container'}>
            <div className='techskills'>
                <h3>Front-End</h3>
                <ul>
                    <li>
                        <div className="icon">
                            <FaHtml5 />
                        </div>
                        <div>
                            <span className='skill'>HTML</span>
                            <span className='level'>Advanced</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <FaCss3Alt />
                        </div>
                        <div>
                            <span className='skill'>CSS</span>
                            <span className='level'>Intermediate</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <SiTypescript />
                        </div>
                        <div>
                            <span className='skill'>Typescript</span>
                            <span className='level'>Basic</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <FaReact />
                        </div>
                        <div>
                            <span className='skill'>React</span>
                            <span className='level'>Advanced</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <FaAngular />
                        </div>
                        <div>
                            <span className='skill'>Angular</span>
                            <span className='level'>Intermediate</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <FaBootstrap />
                        </div>
                        <div>
                            <span className='skill'>Bootstrap</span>
                            <span className='level'>Intermediate</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='techskills'>
                <h3>Back-End</h3>
                <ul>
                    <li> 
                        <div className="icon">
                            <FaNodeJs />
                        </div>
                        <div>
                            <span className='skill'>NodeJS</span>
                            <span className='level'>Advanced</span>
                        </div>
                    </li>
                    <li> 
                        <div className="icon">
                            <IoLogoJavascript />
                        </div>
                        <div>
                            <span className='skill'>Javascript</span>
                            <span className='level'>Advanced</span>
                        </div>
                    </li>
                    <li> 
                        <div className="icon">
                            <FaJava />
                        </div>
                        <div>
                            <span className='skill'>Java</span>
                            <span className='level'>Intermediate</span>
                        </div>
                    </li>
                    <li> 
                        <div className="icon">
                            <SiSpringboot />
                        </div>
                        <div>
                            <span className='skill'>SpringBoot</span>
                            <span className='level'>Intermediate</span>
                        </div>
                    </li>
                    <li> 
                        <div className="icon">
                            <FaPython />
                        </div>
                        <div>
                            <span className='skill'>Python</span>
                            <span className='level'>Intermediate</span>
                        </div>
                    </li>
                    <li> 
                        <div className="icon">
                            <SiCplusplus />
                        </div>
                        <div>
                            <span className='skill'>C++</span>
                            <span className='level'>Basic</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='techskills'>
                <h3>Otros</h3>
                <ul>
                    <li>
                        <div className="icon">
                            <SiMysql />
                        </div>
                        <div>
                            <span className='skill'>MySql</span>
                            <span className='level'>Intermediate</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <SiMongodb />
                        </div>
                        <div>
                            <span className='skill'>MongoDB</span>
                            <span className='level'>Advanced</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <SiOracle />
                        </div>
                        <div>
                            <span className='skill'>Oracle</span>
                            <span className='level'>Basic</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <FaGitAlt />
                        </div>
                        <div>
                            <span className='skill'>Git</span>
                            <span className='level'>Advanced</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <SiPostman />
                        </div>
                        <div>
                            <span className='skill'>Postman</span>
                            <span className='level'>Intermediate</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <SiVisualstudiocode />
                        </div>
                        <div>
                            <span className='skill'>Visual SC</span>
                            <span className='level'>Advanced</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default TechSkills