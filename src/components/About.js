import React, { Component } from 'react'
import profile from '../static/me.png'
import { Container, Icon, Flag } from 'semantic-ui-react'
import ac from '../static/ac.png'
import ku from '../static/ku.png'
import moment from 'moment'

class About extends Component {
  getAge() {
    const today = moment()
    const birthdate = moment('1997-08-25', 'YYYY-MM-DD')
    return Math.floor(today.diff(birthdate, 'years', true))
  }

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
        <div className="about">
          <div className="box">
            <p style={{
              fontSize: '23px',
              fontWeight: 'bold'
            }}>
              <Icon name="user outline" />About me
          </p>
            <p style={{
              fontSize: '20px',
              textAlign: 'left'
            }}>
              <span style={{ marginLeft: '40px' }} />Hello, I'm <b style={{ color: 'blue' }}>Chawakorn</b>. I'm a software developer.
              I'm a junior student majoring in software engineering at Kasetsart University.
              Nowadays, our life has been upgraded because of the abilities of the technologies
              around us, so I'm in love to develop the software for human's better life.
          </p>
          </div>
          <div className="box" style={{ marginTop: '20px' }}>
            <p style={{
              marginBottom: '0',
              fontSize: '23px',
              fontWeight: 'bold'
            }}>
              <Icon name="address card outline" />Personal Information
            </p>
            <div style={{ display: 'flex', fontSize: '20px' }}>
              <div style={{
                width: `40%`,
                textAlign: 'right',
              }}>
                <p>Firstname:</p>
                <p>Lastname:</p>
                <p>Nickname:</p>
                <p>Age:</p>
                <p>Birthdate:</p>
                <p>Nationality:</p>
                <p>Education:</p>
              </div>
              <div style={{ width: `55%`, color: '#b56307' }}>
                <p>Chawakorn</p>
                <p>Suphepre</p>
                <p>Win</p>
                <p>{this.getAge()}</p>
                <p>25 August 1997</p>
                <p><Flag name="th" />Thai</p>
                <p>
                  <img
                    src={ku}
                    alt="ku"
                    width="23"
                    style={{ position: 'relative', top: '5px', marginRight: '10px' }} />
                  Kasetsart University
                  </p>
                <p>
                  <img
                    src={ac}
                    alt="ac"
                    width="30"
                    style={{ position: 'relative', top: '10px', marginRight: '10px' }} />
                  Assumption College
                </p>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          .about {
            max-width: 700px;
            text-align: center;
          }
          .about p {
            margin: 5px 0;
          }
          .about i {
            margin-right: 10px;
          }
          .box {
            background: #f2f2f2;
            padding: 20px;
            border-radius: 10px;
          }
        `}</style>
      </Container>
    )
  }
}

export default About