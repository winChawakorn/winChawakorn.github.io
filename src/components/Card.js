import React, { Component } from 'react'

class Card extends Component {
  render() {
    const image = <img src={this.props.image} className="center" alt="noburo" />
    return (
      <div id="card">
        {this.props.href ? <a href={this.props.href} target="_blank">{image}</a> : <a>{image}</a>}
        <div>
          <p className="box-title">
            {this.props.href ? <a href={this.props.href} target="_blank">{this.props.title}</a> : this.props.title}
          </p>
          <p style={{ fontSize: '20px' }}>
            {this.props.detail}
          </p>
        </div>
      </div>
    )
  }
}

export default Card