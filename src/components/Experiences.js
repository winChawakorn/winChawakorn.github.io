import React, { Component } from 'react'
import { Container, Icon } from 'semantic-ui-react'

class Experiences extends Component {
  render() {
    return (
      <div style={{ background: '#f2f2f2', padding: '40px' }}>
        <Container>
          <p style={{ textAlign: 'center', fontSize: '35px' }}><Icon name="book" />Experiences</p>
        </Container>
      </div>
    )
  }
}
export default Experiences