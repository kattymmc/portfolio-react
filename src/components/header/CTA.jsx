import React from 'react'
import { FormattedMessage } from 'react-intl';

function CTA() {
  return (
    <div className='cta'>
        <a className="btn" href="#about"><FormattedMessage id='header.button1' /></a>
        <a className="btn btn-primary" href="#contact"><FormattedMessage id='header.button2' /></a>
    </div>
  )
}

export default CTA