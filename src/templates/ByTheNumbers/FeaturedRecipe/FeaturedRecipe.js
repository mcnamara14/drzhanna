import React from 'react'
import { Col } from 'antd'
import Img from "gatsby-image"
import Button from '../../../components/Button/Button';

import { Container, StyledRow } from './styles'

const FeaturedRecipe = ({ description, title, image }) => {

  return (
    <Container>
      <h3>Featured recipe</h3>
      <StyledRow gutter={40}>
        <Col xs={24} sm={9}>
          <Img fluid={image?.fluid} />
        </Col>
        <Col xs={24} sm={15}>
          <h4>{title}</h4>
          <p>{description?.description}</p>
          <Button title="VIEW RECIPE" margin="10px 0" />
        </Col>
      </StyledRow>
    </Container>
  )
}

export default FeaturedRecipe
