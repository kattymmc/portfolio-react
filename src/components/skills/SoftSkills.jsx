import React from 'react'
import {RiTeamFill} from 'react-icons/ri'

function SoftSkills() {
  return (
    <section id="softskills">
        <h3>Habilidades</h3>
        <h2>Habilidades blandas</h2>
        <div className='softskills__container'>
                <div className='softskill'>
                    <div className='softskill-title'>
                        <div>
                            <span>01</span>
                            <h3>Empathy</h3>
                        </div>
                        <div className='icon'>
                            <RiTeamFill />
                        </div>
                    </div>
                    <div className='softskill-text'>
                        <p>
                            We cannot talk about user-centered design if we are not able to understand what it needs.
                        </p>
                    </div>
                </div>
                <div className='softskill'>
                    <div className='softskill-title'>
                        <div>
                            <span>01</span>
                            <h3>Empathy</h3>
                        </div>
                        <div className='icon'>
                        <RiTeamFill />
                        </div>
                    </div>
                    <div className='softskill-text'>
                        <p>
                            We cannot talk about user-centered design if we are not able to understand what it needs.
                        </p>
                    </div>
                </div>
                <div className='softskill'>
                    <div className='softskill-title'>
                        <div>
                            <span>01</span>
                            <h3>Empathy</h3>
                        </div>
                        <div className='icon'>
                        <RiTeamFill />
                        </div>
                    </div>
                    <div className='softskill-text'>
                        <p>
                            We cannot talk about user-centered design if we are not able to understand what it needs.
                        </p>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default SoftSkills