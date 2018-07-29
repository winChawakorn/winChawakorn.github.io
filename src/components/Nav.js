import React, { Component } from 'react'
import { Menu, Icon, Sidebar } from 'semantic-ui-react'
import logo from '../static/logo.png'
import './Nav.css'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      sidebar: false,
    };
    this.updateWindowWidth = this.updateWindowWidth.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this)
    this.hideSidebar = this.hideSidebar.bind(this)
  }

  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener('resize', this.updateWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth);
  }

  updateWindowWidth() {
    this.setState({ width: window.innerWidth });
  }

  handleItemClick(e, { name }) {
    //Scroll to element
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
          name={name}
          onClick={this.handleItemClick}
        >
          <Icon name={icon} />
          {name.charAt(0).toUpperCase().concat(name.slice(1))}
        </Menu.Item >
      )
    }
    return menuList.map(item => getMenuItem(item.name, item.icon))
  }

  menu() {
    if (this.state.width < 465) {
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
      <div>
        <Menu icon="labeled" >
          <img src={logo}
            alt="logo"
            height="70"
            width="100"
            className="logo"
          />
          {this.menu()}
        </Menu>
        {this.state.width <= 465 ?
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