import React, { Component } from 'react'
import profile from '../static/me.png'
import { Container } from 'semantic-ui-react'

class About extends Component {
  render() {
    return (
      <Container style={{
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '50px',
      }}>
        <img src={profile}
          alt="profile"
          height="400px"
          style={{
            margin: 'auto',
            verticalAlign: 'text-bottom',
          }} />
        <div>
          <div style={{
            maxWidth: '700px',
            textAlign: 'center',
            marginTop: '30px'
          }}>
            <b>About me</b>< br /><br />
            <p style={{
              fontSize: '20px',
              textAlign: 'left'
            }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet possimus esse veniam tempore explicabo? Fuga recusandae rerum labore quos cumque assumenda quasi? Provident magnam earum est nam delectus neque laboriosam?
            </p>
          </div>
        </div>
      </Container>
    )
  }
}

export default About