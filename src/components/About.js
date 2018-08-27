import React, { Component } from 'react'
import profile from '../static/me.png'
import { Container, Icon, Flag, Progress } from 'semantic-ui-react'
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
        <div className="sticky">
          <img src={profile}
            alt="profile"
            height="400px" />
        </div>
        <div className="about">
          <div className="box">
            <p className="box-title">
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
            <p className="box-title" style={{
              marginBottom: '0',
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
              <div style={{ width: `55%`, color: 'blue' }}>
                <p>Chawakorn</p>
                <p>Suphepre</p>
                <p>Win</p>
                <p>{this.getAge()}</p>
                <p>25 August 1997</p>
                <p><Flag name="th" />Thai</p>
                <p style={{ color: 'green' }}>
                  <img
                    src={ku}
                    alt="ku"
                    width="23"
                    className="schoolicon" />
                  Kasetsart University
                </p>
                <p style={{ fontSize: '16px' }}>(Software & Knowledge Engineering)</p>
                <p style={{ color: 'red' }}>
                  <img
                    src={ac}
                    alt="ac"
                    width="30"
                    className="schoolicon"
                    style={{ top: '10px' }} />
                  Assumption College 130
                </p>
              </div>
            </div>
          </div>
          <div className="box" style={{ margin: '20px 0' }}>
            <p><Icon name="star outline" />Skills</p>
            <Progress percent={90} color="red" active>Java script (NodeJS, ReactJS, ExpressJS)</Progress>
            <Progress percent={100} color="yellow" active>Java</Progress>
            <Progress percent={100} color="purple" active>HTML, CSS</Progress>
            <Progress percent={95} color="orange" active>SQL</Progress>
            <Progress percent={80} color="green" active>C</Progress>
            <Progress percent={60} color="pink" active>PHP</Progress>
            <Progress percent={80} color="teal" active>Docker</Progress>
            <Progress percent={70} color="blue" active>Photoshop</Progress>
          </div>
        </div>
      </Container >
    )
  }
}

export default About