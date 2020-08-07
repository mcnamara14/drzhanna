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
          <div className="featured-recipe--title">
            <p className="featured-recipe--headline">almost</p>
            <h4>Fried Rice</h4>
            <h5>Chicken / Pork / Shrimp / Vegetarian</h5>
          </div>
          <p>{description?.description}</p>
          <Link to={`/by-the-numbers/${path}`}><Button title="VIEW RECIPE" margin="10px 0" /></Link>
        </Col>
      </StyledRow>
    </Container>
  )
}

export default FeaturedRecipe
