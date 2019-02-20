import React, { Component } from 'react'
import { Icon, Image } from 'semantic-ui-react'
import Card from './Card'
import noburo from '../static/noburo.png'
import noburoall from '../static/noburoall.jpg'
import localhackday from '../static/localhackday.svg'
import localhackday1st from '../static/localhackday1st.JPG'
import localhackdayall from '../static/localhackdayall.jpeg'

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
                  Noburo
                  </p>
                <p style={{ fontSize: '20px', color: 'black', fontWeight: 'normal' }}>Financial wellness service for <a alt="ittp" href="http://www.ittp.co.th/" target="_blank">ITTP</a>.</p><br />
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
            title="Local Hack Day"
            detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, aliquid, illum ex nobis eos reiciendis exercitationem provident repellat laudantium saepe veritatis. Distinctio tempore aliquid eaque velit assumenda laudantium ullam magni?"
            footer={
              <span>
                <Image src={localhackday1st} size="massive" />
                <Image src={localhackdayall} size="massive" />
              </span>
            }
          />
        </div>
      </div>
    )
  }
}
export default Experiences
