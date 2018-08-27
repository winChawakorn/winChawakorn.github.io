import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react'
import { Parallax } from 'react-parallax'
import cover from '../static/cover.JPG'

class Cover extends Component {
  render() {
    return (
      <Parallax bgImage={cover} strength={-100}>
        <div style={{ height: this.props.height, background: 'rgb(0, 0, 0, 0.6)' }}>
          <div className="cover">
            <span>Chawakorn</span>
            <Divider section style={{
              width: `50%`,
              marginLeft: '25%',
              color: 'yellow',
            }} horizontal>I'm</Divider>
            <p style={{ fontSize: '20px' }}>Software Developer</p>
          </div>
        </div>
      </Parallax>
    )
  }
}

export default Cover