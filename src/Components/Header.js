import React from 'react'
import '../index.css'
import './Header.css'

export default class Header extends React.Component {
  render () {
    return (
      <div className='header-component'>
        <h1>
          <em>{this.props.title} </em>
          {this.props.text}
          {this.props.prompt ? <i className='pulsate'>|</i> : null}
        </h1>
      </div>
    )
  }
}
