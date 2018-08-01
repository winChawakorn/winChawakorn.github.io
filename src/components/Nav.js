import React, { Component } from 'react'
import { Menu, Icon, Sidebar } from 'semantic-ui-react'
import Scroll from 'react-scroll'
import logo from '../static/logo.png'

const scroll = Scroll.animateScroll

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: false,
    };
    this.overflowWidth = 815
    this.toggleSidebar = this.toggleSidebar.bind(this)
    this.hideSidebar = this.hideSidebar.bind(this)
  }

  handleItemClick(name) {
    switch (name) {
      case 'home': scroll.scrollToTop(); break
      default:
    }
  }

  toggleSidebar() {
    this.setState({ sidebar: !this.state.sidebar })
  }

  hideSidebar() {
    this.setState({ sidebar: false })
  }

  menuItem() {
    const menuList = [
      { name: 'home', icon: 'home' },
      { name: 'about', icon: 'user' },
      { name: 'experiences', icon: 'book' },
      { name: 'projects', icon: 'file code' }]
    const getMenuItem = (name, icon) => {
      return (
        < Menu.Item
          key={name}
          onClick={() => this.handleItemClick(name)}
        >
          <Icon name={icon} />
          {name.charAt(0).toUpperCase().concat(name.slice(1))}
        </Menu.Item >
      )
    }
    return menuList.map(item => getMenuItem(item.name, item.icon))
  }

  menu() {
    if (this.props.width < this.overflowWidth) {
      return (
        <Menu.Item
          name="burger"
          onClick={this.toggleSidebar}
          position="right"
        >
          <Icon name="bars" style={{ padding: '7px 0' }} />
        </Menu.Item>
      )
    } else {
      return (
        <Menu.Menu position="right" className="nav">
          {this.menuItem()}
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <div style={{
        position: 'fixed',
        top: '0',
        zIndex: '99',
        width: `100%`,
        opacity: '0.7'
      }}>
        <Menu icon="labeled" style={{
          padding: this.props.width > this.overflowWidth ? '0 150px' : '0',
        }}>
          <img src={logo}
            alt="logo"
            height="70"
            width="120"
            style={{ padding: '20px 10px' }}
          />
          {this.menu()}
        </Menu>
        {this.props.width <= this.overflowWidth ?
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            onHide={this.hideSidebar}
            vertical
            visible={this.state.sidebar}
            width='thin'
          >
            {this.menuItem()}
          </Sidebar>
          : ''}
      </div>
    )
  }
}

export default Nav