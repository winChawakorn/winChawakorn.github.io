import React, { Component } from 'react'
import Scroll from 'react-scroll'
import Nav from './Nav'
import Cover from './Cover'
import About from './About'
import Experiences from './Experiences'

const Element = Scroll.Element

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
    this.setState({
      width: window.innerWidth,
      height: this.state.height === 0 ? window.innerHeight : this.state.height
    });
  }

  render() {
    return (
      <div>
        <Nav width={this.state.width} />
        <div>
          <Cover width={this.state.width} height={this.state.height} />
          <Element name="about"><About /></Element>
          <Experiences />
        </div>
      </div>
    )
  }
}

export default Home