import React, { Component } from 'react'
import { Icon, Image } from 'semantic-ui-react'
import Card from './Card'
import noburo from '../static/noburo.png'
import localhackday from '../static/localhackday.png'
import localhackday1st from '../static/localhackday1st.JPG'

class Experiences extends Component {
  render() {
    return (
      <div className="grey-section">
        <p className="title"><Icon name="book" />Experiences</p>
        <div className="flexwrap">
          <Card
            href="https://noburo.co/"
            image={noburo}
            title="Noburo"
            detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, aliquid, illum ex nobis eos reiciendis exercitationem provident repellat laudantium saepe veritatis. Distinctio tempore aliquid eaque velit assumenda laudantium ullam magni?"
          />
          <Card
            href="https://youtu.be/_n9Djh__SBo"
            image={localhackday}
            title="Local Hack Day"
            detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, aliquid, illum ex nobis eos reiciendis exercitationem provident repellat laudantium saepe veritatis. Distinctio tempore aliquid eaque velit assumenda laudantium ullam magni?"
            footer={<Image src={localhackday1st} size="huge" />}
          />
        </div>
      </div >
    )
  }
}
export default Experiences
