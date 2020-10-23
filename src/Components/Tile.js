import React from 'react'
import '../index.css'
import './Tile.css'

import { Link } from 'react-router-dom'

export default class Tile extends React.Component {
  render () {
    return (
      <article className='tile-component'>
        <Link to={this.props.link}>
          <div
            className='post-background'
            style={{ backgroundImage: 'url(' + this.props.source + ')' }}
            alt={this.props.alt}
          />
        </Link>
      </article>
    )
  }
}
