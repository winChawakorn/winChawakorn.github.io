import React, { Component } from 'react'
import Nav from './Nav'
import Cover from './Cover'
import About from './About'

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
          <Cover width={this.state.width} height={this.state.height} />

        </div>
      </div>
    )
  }
}

export default Home