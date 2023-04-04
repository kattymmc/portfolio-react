import React from 'react'
import './Contact.css'
import { RiMailSendLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

function Contact() {
  return (
    <section id="contact">
      <h3>Contactame</h3>
      <h2>Dejame un mensaje</h2>
      <div className='contact__container'>
        <div className='contact-info'>
          <div className='contact-card'>
            <RiMailSendLine />
            <h3>Correo</h3>
            <span>kattymmc@hotmail.com</span><br />
            <span>Escríbeme</span>
          </div>
          <div className='contact-card'>
            <BsWhatsapp />
            <h3>Correo</h3>
            <span>kattymmc@hotmail.com</span><br />
            <span>Escríbeme</span>
          </div>
        </div>
        <div className='contact-message'>
          <form className='contact-form'>
            <div className='contact-message-div'>
              <div className='contact-form-div'>
                <label>Correo</label>
                <input className="contact-form-input" required type="email" name="email" placeholder='Escribe tu correo' />
              </div>
              <div className='contact-form-div contact-form-textarea'>
                <label>Mensaje</label>
                <textarea className="contact-form-input" minLength={10} required name="message" placeholder='Escribe tu mensaje'></textarea>
              </div>
              <div className='btn-form'>
                <a className="btn btn-primary">Enviar</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact