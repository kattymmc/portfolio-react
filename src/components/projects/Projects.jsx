import React, { useState, useEffect, useRef } from 'react'
import './Projects.css'
import Modal from './Modal'
import { projects } from '../../data'
import styled from 'styled-components'
import {HiArrowRight} from 'react-icons/hi'
import { FormattedMessage } from 'react-intl'

const Projects = () => {
  const [stateModal, setStateModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isAnimated, setIsAnimated] = useState(false);
  const ref = useRef();

  const changeStateModal = () => {
    setStateModal(!stateModal);
  }

  const changeContent = (project) => {
    setModalContent(project);
    changeStateModal();
  }
  
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
    <section id="projects">
      <h3><FormattedMessage id='projects.subtitle' /></h3>
      <h2><FormattedMessage id='projects.title' /></h2>
      <div ref={ref} className={isAnimated? 'projects__container animated':'projects__container'}>
      {
        projects.map((project, index) => {
          return (
              <div className='projects' onClick={() => changeContent(project)} key={index}>
                <BgImage className='backgroud-image' urlProp={require(`../../assets/${project.image}`)}></BgImage>
                <div className='content'>
                    <div className='details'>
                      <span>{project.type}</span>
                      <p>{project.title}</p>
                      <button><FormattedMessage id='projects.view' /> <span><HiArrowRight /></span></button>
                    </div>
                </div>
              </div>
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
              <p><span><FormattedMessage id='projects.repository' />: </span><a href={modalContent.repository} target='_blank' rel="noreferrer">{modalContent.repository === "" ? <FormattedMessage id="projects.nocontent" /> : "Github"}</a></p>
              <p><span><FormattedMessage id='projects.date' />: </span>{modalContent.date}</p>
              <p><span><FormattedMessage id='projects.tech' />: </span>{modalContent.techstack}</p>
            </div>  
          </div>    
          <div>
              { modalContent.image &&
                <img src={require(`../../assets/${modalContent.image}`)} alt={modalContent.title} />
              }
          </div>      
      </Modal>          
      </div>
    </section>
  )
}

const BgImage = styled.div `
  background-image: url(${props => props.urlProp});
  filter: brightness(0.5) contrast(0.8);
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