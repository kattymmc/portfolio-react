import React from 'react'
import './Skills.css'
import SoftSkills from './SoftSkills'
import TechSkills from './TechSkills'

function Skills() {
  return (
    <section id="skills">
      <div className='skills__container'>
        <SoftSkills/>
        <TechSkills />
      </div>
    </section>
    
  )
}

export default Skills