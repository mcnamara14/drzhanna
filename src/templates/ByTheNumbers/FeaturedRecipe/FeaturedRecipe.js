import React from 'react'
import { Col } from 'antd'
import Img from "gatsby-image"

import { Container, StyledRow } from './styles'

const FeaturedRecipe = ({ description, title, image }) => {

  return (
    <Container>
      <h3>Featured recipe</h3>
      <StyledRow gutter={40}>
        <Col xs={9}>
          <Img fluid={image?.fluid} />
        </Col>
        <Col xs={15}>
          <h4>{title}</h4>
          <p>{description?.description}</p>
        </Col>
      </StyledRow>
    </Container>
  )
}

export default FeaturedRecipe
