import React, { useState, useEffect, useRef } from 'react'
import {RiTeamFill} from 'react-icons/ri'
import {GiBrain} from 'react-icons/gi'
import {FaBookReader} from 'react-icons/fa'
import { FormattedMessage } from 'react-intl';

const SoftSkills = () => {
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
    <section id="softskills">
        <h3><FormattedMessage id='skills.subtitle' /></h3>
        <h2><FormattedMessage id='softskills.title' /></h2>
        <div ref={ref} className={isAnimated ? 'softskills__container animated' : 'softskills__container'}>
            <div className='softskill'>
                <div className='softskill-title'>
                    <div>
                        <span>01</span>
                        <h3><FormattedMessage id='softskills.skill1' /></h3>
                    </div>
                    <div className='icon'>
                        <RiTeamFill />
                    </div>
                </div>
                <div className='softskill-text'>
                    <p>
                        <FormattedMessage id='softskills.description1' />
                    </p>
                </div>
            </div>
            <div className='softskill'>
                <div className='softskill-title'>
                    <div>
                        <span>02</span>
                        <h3><FormattedMessage id='softskills.skill2' /></h3>
                    </div>
                    <div className='icon'>
                    <FaBookReader />
                    </div>
                </div>
                <div className='softskill-text'>
                    <p> 
                        <FormattedMessage id='softskills.description2' />
                    </p>
                </div>
            </div>
            <div className='softskill'>
                <div className='softskill-title'>
                    <div>
                        <span>03</span>
                        <h3><FormattedMessage id='softskills.skill3' /></h3>
                    </div>
                    <div className='icon'>
                    <GiBrain />
                    </div>
                </div>
                <div className='softskill-text'>
                    <p>
                        <FormattedMessage id='softskills.description3' />
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SoftSkills