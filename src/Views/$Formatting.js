import React from 'react'
import '../index.css'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Figure from '../Components/Figure'
import { Link } from 'react-router-dom'

export default class Formatting extends React.Component {
  render () {
    return (
      <div className='Formatting'>
        <Header
          title='repo-code: '
          text='Title of Project'
        />
        <p className='prompt'><Link to='/'><i className='pulsate'>./home?</i></Link></p>
        <p className='prompt'>echo '&lt; project_name_blog.txt'</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Figure
          source='./Resources/Projects/Formatting/placeholder.png'
          title='Placeholder Image'
          caption='Caption'
        />

        <Footer />
      </div>
    )
  }
}
