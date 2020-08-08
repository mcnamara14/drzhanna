import React from 'react'
import { Col, Row } from 'antd'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import InnerWrapper from '../../../components/InnerWrapper/InnerWrapper'
import Layout from '../../../components/layout'

import { Section } from './styles'

const RecipeDetail = ({ data: { contentfulRecipe } }) => {
    const {
        title,
        image,
        ingredients,
        directions
    } = contentfulRecipe

    const isFriedRice = title === 'Chicken Fried Rice'

    return (
        <Layout path='/by-the-numbers'>
            <Section>
                <InnerWrapper>
                    <Row gutter={60} type="flex" justify="center">
                        <Col xs={24} sm={12} className="recipe-detail--desktop-image">
                            <Img fluid={image.fluid} />
                            <div className="recipe-detail--title">
                            {isFriedRice ? (
                                <>
                            <p className="featured-recipe--headline">almost</p>
                            <h1>Fried Rice</h1>
                            <h5>Chicken / Pork / Shrimp / Vegetarian</h5> 
                            </>
                            ) : (
                                <>
                                <h1>
                                    {title}
                                </h1>
                                <hr />
                                <p>4 servings <span>&</span> 150 calories </p>
                                </>
                            )}
                            </div>
                        </Col>
                        <Col xs={24} sm={12} className="recipe-detail--ingredients">
                            <h2>Ingredients</h2>
                            <ul>
                                {ingredients?.map(ingredient => {
                                    return (
                                        <li>
                                            <span>
                                                {ingredient}
                                            </span>
                                        </li>
                                    )
                                })}
                            </ul>
                            <h2>Directions</h2>
                            {directions?.map((direction, index) => {
                                return (
                                    <div className="recipe-detail--step">
                                        <b >
                                            STEP {index + 1}
                                        </b>
                                        <span>
                                            {direction}
                                        </span>
                                    </div>
                                )
                            })}
                        </Col>
                    </Row>
                </InnerWrapper>
            </Section>
        </Layout>
    )
}

export default RecipeDetail

export const RecipeDetailQuery = graphql`
    query RecipeDetailQuery($slug: String!) {
        contentfulRecipe(path: { eq: $slug }) {
            ...Recipe
        }
    }
`
