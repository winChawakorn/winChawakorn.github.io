import React, { Component } from 'react'

class Card extends Component {
  render() {
    const image = <img src={this.props.image} alt="noburo" />
    const title = this.props.href ? <a href={this.props.href} target="_blank">{this.props.title}</a> : this.props.title
    return (
      <div id="card">
        <div>
          {this.props.href ? <a href={this.props.href} target="_blank">{image}</a> : <a>{image}</a>}
          <div>
            <p className="box-title">
              {title}
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