import React, { Component } from 'react'
import profile from '../static/me.png'
import { Icon, Flag, Image } from 'semantic-ui-react'
import moment from 'moment'
import ac from '../static/ac.png'
import ku from '../static/ku.png'
import htmlcss from '../static/htmlcss.svg'
import js from '../static/jslogo.png'
import node from '../static/nodelogo.png'
import react from '../static/reactlogo.png'
import express from '../static/expresslogo.svg'
import reduxsaga from '../static/reduxsagalogo.png'
import puppeteer from '../static/puppeteerlogo.png'
import jest from '../static/jestlogo.png'
import testcafe from '../static/testcafelogo.png'
import antd from '../static/antdlogo.svg'
import styled from '../static/styledlogo.png'
import java from '../static/javalogo.png'
import androidstudio from '../static/androidstudiologo.jpg'
import swift from '../static/swiftlogo.png'
import xcode from '../static/xcodelogo.png'
import elasticsearch from '../static/elasticsearchlogo.png'
import kibana from '../static/kibanalogo.png'
import mysql from '../static/mysqllogo.png'
import mongodb from '../static/mongodblogo.jpg'
import firebase from '../static/firebaselogo.png'
import firestore from '../static/firestorelogo.png'
import googlecloud from '../static/googlecloudlogo.png'
import git from '../static/gitlogo.png'
import gitlab from '../static/gitlablogo.svg'
import docker from '../static/dockerlogo.png'
import kubernetes from '../static/kuberneteslogo.png'

class About extends Component {
  getAge() {
    const today = moment()
    const birthdate = moment('1997-08-25', 'YYYY-MM-DD')
    return Math.floor(today.diff(birthdate, 'years', true))
  }

  render() {
    return (
      <div className="about section">
        <p className="title"><Icon name="user" />About</p>
        <hr />
        <div className="box flexwrap">
          <img
            className="profile"
            src={profile}
            alt="profile"
            height="350px" />
          <div className="about-me">
            <p className="box-title">
              <Icon name="user" style={{ color: 'blue' }} />About me
            </p>
            <p style={{
              fontSize: '20px',
              textAlign: 'left'
            }}>
              <span style={{ marginLeft: '40px' }} />Hello, I'm <b style={{ color: '#969494' }}>Chawakorn</b>. I'm a software developer majoring in software engineering at Kasetsart University.
              Nowadays, our life has been enhanced by the abilities of technologies, so the influence of technologies make me fell in love with the software developing.
            </p>
          </div>
        </div>
        <div className="flexwrap">
          <div className="box">
            <p className="box-title">
              <Icon name="address card" style={{ color: 'grey', fontSize: '30px' }} />Personal Information
            </p>
            <div style={{ display: 'flex', fontSize: '20px' }}>
              <div style={{
                width: `40%`,
                textAlign: 'right',
              }}>
                <p>Firstname</p>
                <p>Lastname</p>
                <p>Nickname</p>
                <p>Age</p>
                <p>Birthdate</p>
                <p>Nationality</p>
                <p>Education</p>
              </div>
              <div style={{ width: `55%`, color: '#969494' }}>
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
            <div style={{ display: 'flex', fontSize: '20px', marginTop: '10px' }}>
              <div style={{ width: `40%`, textAlign: 'right' }}>
                <p>Hobby</p><br /><br /><br /><br />
                <p style={{ marginTop: '10px' }}>Address</p>
                <p>Email</p>
                <p>Mobile phone</p>
              </div>
              <div style={{ width: `55%`, color: '#969494' }}>
                <p>Playing guitar,<br />Singing,<br />Bodybuilding,<br />Watching movie</p>
                <p>Ladprao, Bangkok</p>
                <p><Icon name="mail" />win.chawakorn@gmail.com</p>
                <p style={{ fontFamily: 'monospace' }}><Icon name="phone" />083-247-9661</p>
              </div>
            </div>
            <div className="contact-bar"><a target="_blank" rel="noopener noreferrer" href="http://github.com/winchawakorn"><Icon name="github" color="black" /></a><a target="_blank" rel="noopener noreferrer" href="http://facebook.com/winchawakorn"><Icon name="facebook" color="blue" /></a></div>
          </div>
          <div className="box" style={{ paddingLeft: '0', paddingRight: '0' }}>
            <p className="box-title"><Icon name="star" style={{ color: 'red' }} />Skills</p>
            <div className="about-skill-container">
              <b className="about-skill-title">Fullstack web application</b>
              <div className="flexwrap">
                <img className="about-skill-logo" src={htmlcss} alt="htmlcss-logo" height="70px" />
                <img className="about-skill-logo" src={js} alt="js-logo" height="70px" />
                <img className="about-skill-logo" src={node} alt="node-logo" height="70px" />
                <img className="about-skill-logo" src={react} alt="react-logo" height="70px" />
                <img className="about-skill-logo" src={express} alt="express-logo" height="70px" width="100px" />
                <img className="about-skill-logo" src={reduxsaga} alt="reduxsaga-logo" height="70px" />
                <img className="about-skill-logo" src={puppeteer} alt="puppeteer-logo" height="70px" />
                <img className="about-skill-logo" src={jest} alt="jest-logo" height="70px" />
                <img className="about-skill-logo" src={testcafe} alt="testcafe-logo" height="30px" />
                <img className="about-skill-logo" src={styled} alt="styled-logo" height="70px" />
                <img className="about-skill-logo" src={antd} alt="antd-logo" height="70px" />
              </div>
            </div>
            <hr />
            <div className="about-skill-container">
              <b className="about-skill-title">Mobile application</b>
              <div className="flexwrap">
                <img className="about-skill-logo" src={java} alt="java-logo" height="70px" />
                <img className="about-skill-logo" src={androidstudio} alt="androidstudio-logo" height="70px" />
                <img className="about-skill-logo" src={swift} alt="swift-logo" height="40px" height="40px" style={{ marginTop: '10px' }} />
                <img className="about-skill-logo" src={xcode} alt="xcode-logo" height="70px" />
              </div>
            </div>
            <hr />
            <div className="about-skill-container">
              <b className="about-skill-title">Database, Data analytic & Visualization</b>
              <div className="flexwrap">
                <img className="about-skill-logo" src={elasticsearch} alt="elasticsearch-logo" height="70px" />
                <img className="about-skill-logo" src={kibana} alt="kibana-logo" height="70px" />
                <img className="about-skill-logo" src={mysql} alt="mysql-logo" height="60px" />
                <img className="about-skill-logo" src={mongodb} alt="mongodb-logo" height="35px" />
                <img className="about-skill-logo" src={firebase} alt="firebase-logo" height="50px" />
                <img className="about-skill-logo" src={firestore} alt="firestore-logo" height="40px" />
              </div>
            </div>
            <hr />
            <div className="about-skill-container">
              <b className="about-skill-title">Deployment & Version control</b>
              <div className="flexwrap">
                <img className="about-skill-logo" src={docker} alt="docker-logo" height="70px" />
                <img className="about-skill-logo" src={kubernetes} alt="kubernetes-logo" height="60px" />
                <img className="about-skill-logo" src={firebase} alt="firebase-logo" height="50px" />
                <img className="about-skill-logo" src={googlecloud} alt="googlecloud-logo" height="90px" />
                <img className="about-skill-logo" src={git} alt="git-logo" height="40px" />
                <img className="about-skill-logo" src={gitlab} alt="gitlab-logo" height="40px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About