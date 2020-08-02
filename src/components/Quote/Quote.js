import React from 'react'

import { Container } from './styles'

const Quote = ({ author, quote }) => {
  return (
    <Container>
      <h4>{quote}</h4>
      <p>- {author}</p>
    </Container>
  )
}

export default Quote