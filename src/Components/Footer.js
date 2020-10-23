import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../index.css'
import './Footer.css'

import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin, faRedditSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

export default class Footer extends React.Component {
  render () {
    return (
      <div className='footer-component'>
        <p className='prompt'>./print_contact_info</p>
        <center>
          <li><a title='Send me an Email' href='mailto:wang.poplar@gmail.com?subject=Hello'><FontAwesomeIcon icon={faEnvelopeSquare} /></a></li>
          <li><a title='Check out my GitHub' href='https://github.com/Fsq-Poplar'><FontAwesomeIcon icon={faGithubSquare} /></a></li>
          <li><a title='Connect with me on LinkedIn' href='https://www.linkedin.com/in/poplar-wang/'><FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li><a title='Stalk my Reddit' href='https://www.reddit.com/user/TrueElite/'><FontAwesomeIcon icon={faRedditSquare} /></a></li>
          <li><a title='Listen to my music' href='https://ih0.redbubble.net/image.455809642.9971/poster,840x830,f8f8f8-pad,750x1000,f8f8f8.u2.jpg'><FontAwesomeIcon icon={faYoutubeSquare} /></a></li>
        </center>
        <p className='prompt'><i className='pulsate'>|</i></p>
      </div>
    )
  }
}
