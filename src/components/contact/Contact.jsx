import React, { useRef, useState, useEffect } from 'react'
import './Contact.css'
import { RiMailSendLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com';
import { FormattedMessage, useIntl } from 'react-intl';

const Contact = () => {

  const form = useRef();
  const intl = useIntl();

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
      <h3><FormattedMessage id='contact.subtitle' /></h3>
      <h2><FormattedMessage id='contact.title' /></h2>
      <div ref={ref} className={isAnimated ? 'contact__container animated-y' : 'contact__container'}>
        <div className='contact-info'>
          <div className='contact-card'>
            <span className='icon'><RiMailSendLine /></span>
            <p className="contact-name"><FormattedMessage id='contact.email' /></p>
            <p className="contact-mail">kattymmc@hotmail.com</p>
            <a href="mailto:kattymmc@hotmail.com" target='_blank' rel="noreferrer"><FormattedMessage id='contact.writeme' /></a>
          </div>
          <div className='contact-card'>
            <span className='icon'><BsWhatsapp /></span>
            <p className="contact-name">Whatsapp</p>
            <p className="contact-mail">+51 940758558</p>
            <a href="https://wa.link/ame3sm" target='_blank' rel="noreferrer"><FormattedMessage id='contact.writeme' /></a>
          </div>
        </div>
        <div className='contact-message'>
          <form className='contact-form' ref={form} onSubmit={sendEmail}>
            <div className='contact-message-div'>
              <div className='contact-form-div'>
                <label><FormattedMessage id='contact.email' /></label>
                <input className="contact-form-input" required type="email" name="email" placeholder={intl.formatMessage({id: 'contact.emailinput'})} />
              </div>
              <div className='contact-form-div contact-form-textarea'>
                <label><FormattedMessage id='contact.message' /></label>
                <textarea className="contact-form-input" minLength={10} required name="message" placeholder={intl.formatMessage({id: 'contact.messageinput'})}></textarea>
              </div>
              <div className='btn-form'>
                <button className="btn btn-primary" type="submit"><FormattedMessage id='contact.submit' /></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;