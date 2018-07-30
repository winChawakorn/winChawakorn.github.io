import React, { Component } from 'react'
import Nav from './Nav'
import cover from '../static/cover.JPG'
import { Divider } from 'semantic-ui-react'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0,
    }
    this.updateWindowDimension = this.updateWindowDimension.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimension()
    window.addEventListener('resize', this.updateWindowDimension);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimension);
  }

  updateWindowDimension() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div>
        <Nav width={this.state.width} />
        <div className="container" style={{ marginTop: `-72px` }} >
          <div style={{
            height: this.state.height,
            width: this.state.width,
            background: `linear-gradient(rgba(196, 218, 255, 0.5), rgba(196, 218, 255, 0.5)), url(${cover})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no- repeat',
            display: 'table'
          }}>
            <div style={{
              textAlign: 'center',
              fontFamily: 'helvetica',
              fontSize: '50px',
              display: 'table-cell',
              verticalAlign: 'middle',
            }}>
              <b>Chawakorn</b>
              <Divider style={{ width: `50%`, marginLeft: '25%' }} />
              <span style={{ fontSize: '20px' }}>Software Developer</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home