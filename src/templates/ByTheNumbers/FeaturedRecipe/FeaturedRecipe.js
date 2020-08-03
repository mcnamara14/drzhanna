import React from 'react'
import { Col } from 'antd'
import Img from "gatsby-image"
import { Link } from 'gatsby'
import Button from '../../../components/Button/Button';

import { Container, StyledRow } from './styles'

const FeaturedRecipe = ({ description, title, image, path }) => {

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
          <Link to={`/by-the-numbers/${path}`}><Button title="VIEW RECIPE" margin="10px 0" /></Link>
        </Col>
      </StyledRow>
    </Container>
  )
}

export default FeaturedRecipe
