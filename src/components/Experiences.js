import React, { Component } from 'react'
import { Icon, Image } from 'semantic-ui-react'
import Card from './Card'
import noburo from '../static/noburo.png'
import noburoall from '../static/noburoall.jpg'
import localhackday from '../static/localhackday.svg'
import localhackday1st from '../static/localhackday1st.JPG'
import localhackdayall from '../static/localhackdayall.jpeg'
import exceed14 from '../static/exceed14.png'
import exceed15 from '../static/exceed15.png'
import exceed14project1 from '../static/exceed14project1.jpg'
import exceed14project2 from '../static/exceed14project2.png'
import exceed15project1 from '../static/exceed15project1.png'
import exceed15project2 from '../static/exceed15project2.png'

class Experiences extends Component {
  render() {
    return (
      <div className="grey section">
        <p className="title"><Icon name="book" />Experiences</p>
        <div className="flexwrap">
          <Card
            href="http://noburo.co/"
            image={noburo}
            title={
              <div style={{ display: 'block' }}>
                <p className="box-title">
                  Noburo ( 2018 - now )
                  </p>
                <p style={{ fontSize: '20px', color: 'black', fontWeight: 'normal' }}>Financial wellness service for <a alt="ittp" href="http://www.ittp.co.th/" target="_blank" rel="noopener noreferrer">ITTP</a>.</p><br />
              </div>}
            detail={<div style={{ display: 'block' }}>
              <p>I am an intern at Noburo for 2 months, then I became a part time employee until now.</p><br />
              <b style={{ color: 'red' }}>Role:</b>{' '}Fullstack web developer<br />
              <b style={{ color: 'red' }}>Projects:</b><br />
              <b style={{ color: '#969494' }}><Icon name="star" /> Noburo</b>
              <p style={{ marginLeft: '15px' }}>Loan management system for improving customer's financial credit created with <b>Nextjs</b> and <b>Expressjs</b>.</p><br />
              <b style={{ color: '#969494' }}><Icon name="star" /> Noburo collection</b>
              <p style={{ marginLeft: '15px' }}>Debt collection system split from Noburo created with <b>Nextjs</b> and <b>Expressjs</b>.</p><br />
              <b style={{ color: '#969494' }}><Icon name="star" /> Loan analysis</b>
              <p style={{ marginLeft: '15px' }}>Analyze and visualize customers' loans for the future bussiness plan created with <b>Elasticsearch</b> and <b>Kibana</b>.</p><br />
              <b style={{ color: '#969494' }}><Icon name="star" /> Phone recording backup</b>
              <p style={{ marginLeft: '15px' }}>Automatically phone recording backup system from recording service on website to email, and from email to <b>Google cloud storage</b>. This system was created with <b>Google cloud function</b>, <b>Gmail api</b>, and <b>Google cloud scheduler</b>.</p><br />
            </div>}
            footer={<Image src={noburoall} size="massive" />}
          />
          <Card
            href="https://youtu.be/_n9Djh__SBo"
            image={localhackday}
            title={
              <div style={{ display: 'block' }}>
                <p className="box-title">
                  <Icon style={{ color: 'red' }} name="trophy" />{' '}1st place Local Hack Day ( 2016 )
                  </p>
                <p style={{ fontSize: '20px', color: 'black', fontWeight: 'normal' }}>Student Hackathon hosted by GitHub and Major League Hacking (MLH)</p><br />
              </div>
            }
            detail={<p>My team's project was <b style={{ color: 'red' }}>Touchyou</b>, an android application for wireless performing actions in PC, which the inspiration come from the promoting of the new mac book with <b style={{ color: 'red' }}>touchbar</b>.</p>}
            footer={
              <span>
                <Image src={localhackday1st} size="massive" />
                <Image src={localhackdayall} size="massive" />
              </span>
            }
          />
          <Card
            href="http://exceed.cpe.ku.ac.th/wiki/index.php/Exceed_14_Group_2"
            image={exceed14}
            title={
              <div style={{ display: 'block' }}>
                <p className="box-title">
                  Exceed camp 14th ( 2017 )
                  </p>
                <p style={{ fontSize: '20px', color: 'black', fontWeight: 'normal' }}>24 hours IoT hackathon by faculty of computer engineering Kasetsart University. <b>Click here to see the project details.</b></p><br />
              </div>}
            detail={<p>My team's name is <b style={{ color: 'red' }}>Ceedler</b> and our project was <b style={{ color: 'red' }}>Triple Z (Zzz)</b>, an IoT device that will make people who have bad sleeping habits to sleep better by controlling home's environments follow the user's sleeping status.</p>}
            footer={
              <span>
                <Image src={exceed14project1} size="massive" />
                <Image src={exceed14project2} size="massive" />
              </span>
            }
          />
          <Card
            href="http://exceed.cpe.ku.ac.th/wiki/index.php/Exceed_15_Group_11"
            image={exceed15}
            title={
              <div style={{ display: 'block' }}>
                <p className="box-title">
                  Exceed camp 15th ( 2018 )
                  </p>
                <p style={{ fontSize: '20px', color: 'black', fontWeight: 'normal' }}>Group project advisor. <b>Click here to see the project details.</b></p><br />
              </div>}
            detail={<p><b style={{ color: 'red' }}>Seminar Assistant</b>, an IoT device for helping the speaker while presenting and suggesting which parts should be improved.</p>}
            footer={
              <span>
                <Image src={exceed15project1} size="massive" />
                <Image src={exceed15project2} size="massive" />
              </span>
            }
          />
        </div>
      </div>
    )
  }
}
export default Experiences
