import React from 'react'
import './Skills.css'
import SoftSkills from './SoftSkills'
import TechSkills from './TechSkills'

function Skills() {
  return (
    <div className='skills__container'>
      <SoftSkills/>
      <TechSkills />
    </div>
  )
}

export default Skills