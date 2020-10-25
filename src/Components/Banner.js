import React from 'react'
import '../index.css'
import './Banner.css'

export default class Banner extends React.Component {
  render () {
    return (
      <div className='banner-component'>
        <img className='banner-img' src='./Resources/Banner.jpg' alt='Banner' />
        <img className='banner-logo' src='./favicon.ico' alt='logo' />
      </div>
    )
  }
}
