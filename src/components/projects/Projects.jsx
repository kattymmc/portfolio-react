import React, { useState } from 'react'
import './Projects.css'
import Modal from './Modal'
import { projects } from '../../data'
import styled from 'styled-components'
import {HiArrowRight} from 'react-icons/hi'

const Projects = () => {
  const [stateModal, setStateModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const changeStateModal = () => {
    setStateModal(!stateModal);
  }

  const changeContent = (project) => {
    setModalContent(project);
    changeStateModal();
  }

  return (
    <section id="projects">
      <h3>Proyectos</h3>
      <h2>Sistemas que he realizado</h2>
      <div className='projects__container'>
      {
        projects.map((project, index) => {
          return (
            <>
              <div className='projects' onClick={() => changeContent(project)}>
                <BgImage className='backgroud-image' urlProp={require(`../../assets/${project.image}`)}></BgImage>
                <div className='content'>
                    <div className='details'>
                      <span>{project.type}</span>
                      <p>{project.title}</p>
                      <button>View Project <span><HiArrowRight /></span></button>
                    </div>
                </div>
              </div>
            </>
          )
        })
      }

      <Modal state={stateModal} changeState={setStateModal}>
          <h2>{modalContent.title}</h2>
          <div className='modal-container'>
            <div>
              <p>{modalContent.description}</p>
            </div>
            <div>
              <p>Repositorio: </p>
              <p>Fecha: </p>
              <p>Tecnologías: </p>
            </div>  
          </div>    
          <div>
              { modalContent.image &&
                <img src={require(`../../assets/${modalContent.image}`)} />
              }
          </div>      
      </Modal>          
      </div>
    </section>
  )
}

const BgImage = styled.div `
  background-image: url(${props => props.urlProp});
  filter: brightness(0.6) contrast(0.9);
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: all .3s ease;
`

export default Projects