import React, { Component } from 'react'
import { Icon, Image } from 'semantic-ui-react'
import Card from './Card'
import noburo from '../static/noburo.png'
import noburoall from '../static/noburoall.jpg'
import localhackday from '../static/localhackday.png'
import localhackday1st from '../static/localhackday1st.JPG'
import localhackdayall from '../static/localhackdayall.jpeg'

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
            footer={<Image src={noburoall} size="huge" />}
          />
          <Card
            href="https://youtu.be/_n9Djh__SBo"
            image={localhackday}
            title="Local Hack Day"
            detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, aliquid, illum ex nobis eos reiciendis exercitationem provident repellat laudantium saepe veritatis. Distinctio tempore aliquid eaque velit assumenda laudantium ullam magni?"
            footer={
              <span>
                <Image src={localhackday1st} size="huge" />
                <Image src={localhackdayall} size="huge" />
              </span>
            }
          />
        </div>
      </div >
    )
  }
}
export default Experiences
