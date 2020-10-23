import React from 'react'
import '../index.css'

export default class Figure extends React.Component {
  render () {
    return (
      <figure className='figure-component'>
        <center>
          <img
            src={this.props.source}
            title={this.props.title}
            alt={this.props.title}
          />
          <figcaption><font size='2'>{this.props.caption}</font></figcaption>
        </center>
      </figure>
    )
  }
}
