import React from 'react'
import {FaHtml5, FaCss3Alt, FaReact, FaAngular, FaBootstrap} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'

function TechSkills() {
  return (
    <section id="techskills">
        <h3>Habilidades</h3>
        <h2>Habilidades técnicas</h2>
        <div className='techskills__container'>
            <div className='techskills'>
                <h3>Front-End</h3>
                <ul>
                    <li>
                        <div class="icon">
                            <FaHtml5 />
                        </div>
                        <div>
                            <span className='skill'>HTML</span>
                            <span className='level'>Advanced</span>
                        </div>
                    </li>
                    <li>
                        <div class="icon">
                            <FaCss3Alt />
                        </div>
                        <div>
                            <span className='skill'>CSS</span>
                            <span className='level'>Intermediate</span>
                        </div>
                    </li>
                    <li>
                        <div class="icon">
                            <IoLogoJavascript />
                        </div>
                        <div>
                            <span className='skill'>Javascript</span>
                            <span className='level'>Advanced</span>
                        </div>
                    </li>
                    <li>
                        <div class="icon">
                            <FaReact />
                        </div>
                        <div>
                            <span className='skill'>React</span>
                            <span className='level'>Advanced</span>
                        </div>
                    </li>
                    <li>
                        <div class="icon">
                            <FaAngular />
                        </div>
                        <div>
                            <span className='skill'>Angular</span>
                            <span className='level'>Intermediate</span>
                        </div>
                    </li>
                    <li>
                        <div class="icon">
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
                    <li>NodeJS</li>
                    <li>SpringBoot</li>
                    <li>Python</li>
                    <li>C++</li>
                    <li>Postman</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div className='techskills'>
                <h3>Others</h3>
                <ul>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Git</li>
                    <li>Oracle</li>
                    <li>Postman</li>
                    <li>Scrum</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default TechSkills