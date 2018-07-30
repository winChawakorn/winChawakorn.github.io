import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react'
import cover from '../static/cover.JPG'

class Cover extends Component {
  render() {
    return (
      <div style={{
        height: this.props.height,
        width: this.props.width,
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cover})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no- repeat',
        display: 'table',
        color: 'white'
      }}>
        <div
          style={{
            textAlign: 'center',
            fontSize: '50px',
            display: 'table-cell',
            verticalAlign: 'middle',
          }}>
          <span>Chawakorn</span>
          <Divider section style={{
            width: `50%`,
            marginLeft: '25%',
            color: 'white',
          }} horizontal>I'm</Divider>
          <p style={{ fontSize: '20px' }}>Software Developer</p>
        </div>
      </div>
    )
  }
}

export default Cover