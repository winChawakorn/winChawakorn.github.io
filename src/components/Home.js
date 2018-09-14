import React, { Component } from 'react'
import { Element } from 'react-scroll'
import Nav from './Nav'
import Cover from './Cover'
import About from './About'
import Experiences from './Experiences'

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
          <Element name="home"><Cover width={this.state.width} height={this.state.height} /></Element>
          <Element name="about"><About /></Element>
          <Element name="experiences"><Experiences /></Element>
        </div>
      </div>
    )
  }
}

export default Home