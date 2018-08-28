import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import Card from './Card'
import noburo from '../static/noburo.png'

class Experiences extends Component {
  render() {
    return (
      <div className="grey-section">
        <p className="title"><Icon name="book" />Experiences</p>
        <Card
          href="https://noburo.co/"
          image={noburo}
          title="Noburo"
          detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, aliquid, illum ex nobis eos reiciendis exercitationem provident repellat laudantium saepe veritatis. Distinctio tempore aliquid eaque velit assumenda laudantium ullam magni?"
        />
      </div >
    )
  }
}
export default Experiences
