import React, { useRef } from 'react'
import './Contact.css'
import { RiMailSendLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_71g7sr4', 'template_2wt8onw', form.current, 'qF0VRWe14Lo7LCcIx')
    .then((result) => {
        e.target.reset();
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <section id="contact">
      <h3>Contáctame</h3>
      <h2>Dejame un mensaje</h2>
      <div className='contact__container'>
        <div className='contact-info'>
          <div className='contact-card'>
            <span className='icon'><RiMailSendLine /></span>
            <h3>Correo</h3>
            <span>kattymmc@hotmail.com</span><br />
            <span>Escríbeme</span>
          </div>
          <div className='contact-card'>
            <span className='icon'><BsWhatsapp /></span>
            <h3>Whatsapp</h3>
            <span>+51 940758558</span><br />
            <span>Escríbeme</span>
          </div>
        </div>
        <div className='contact-message'>
          <form className='contact-form' ref={form} onSubmit={sendEmail}>
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
                <button className="btn btn-primary" type="submit">Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact