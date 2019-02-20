import React, { Component } from 'react'

class Card extends Component {
  render() {
    const image = this.props.href ? <a href={this.props.href} target="_blank"><img src={this.props.image} alt="logo" /></a> : <img src={this.props.image} alt="logo" />
    const title = this.props.href ? <a href={this.props.href} target="_blank">{this.props.title}</a> : this.props.title
    return (
      <div id="card">
        <div>
          <div>
            <p>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {image}{title}
              </div>
            </p>
            <p style={{ fontSize: '20px' }}>
              {this.props.detail}
            </p>
          </div>
        </div>
        {this.props.footer}
      </div>
    )
  }
}

export default Card