import React, { Component } from 'react'
import { Container, Icon } from 'semantic-ui-react'
import Card from './Card'
import noburo from '../static/noburo.png'

class Experiences extends Component {
  render() {
    return (
      <div style={{ background: '#f2f2f2', padding: '40px' }}>
        <Container>
          <p className="title"><Icon name="book" />Experiences</p>
          <Card
            image={noburo}
            title="Noburo"
            detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, aliquid, illum ex nobis eos reiciendis exercitationem provident repellat laudantium saepe veritatis. Distinctio tempore aliquid eaque velit assumenda laudantium ullam magni?"
          />
        </Container>
      </div >
    )
  }
}
export default Experiences