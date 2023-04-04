import React from 'react'
import './Projects.css'
import PROJECT1 from "../../assets/project1.png"
import PROJECT2 from "../../assets/project2.png"

function Projects() {
  return (
    <section id="projects">
      <h3>Projects</h3>
      <h2>Projects I've been work on</h2>
      <div className='projects__container'>
        <div className='projects'>
          <div>
            <div className='backgroud-image' data-img-url={PROJECT1}></div>
            <div className='content'>
              <div className='details'>
                <span>Web and Mobile App</span>
                <h3>Web and App Mobile for Latamready</h3>
                <span>View Project --</span>
              </div>
            </div>
          </div>
        </div>
        <div className='projects'>
          <div>
            <div className='backgroud-image' data-img-url={PROJECT2}></div>
            <div className='content'>
              <div className='details'>
                <span>Web and Mobile App</span>
                <h3>Web and App Mobile for Latamready</h3>
                <span>View Project --</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects