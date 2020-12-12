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

    return (
        <Layout path='/by-the-numbers'>
            <Section>
                <InnerWrapper>
                    <Row gutter={60}>
                        <Col xs={24} sm={12}>
                            <h1>
                                {title}
                            </h1>
                            <Img fluid={image.fluid} className="recipe-detail--mobile-image" />
                            <h2>What</h2>
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
                            <h2>How</h2>
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
                        <Col xs={0} sm={12}>
                            <Img fluid={image.fluid} />
                        </Col>
                    </Row>
                </InnerWrapper>
            </Section>
        </Layout>
    )
}

export default RecipeDetail

// export const RecipeDetailQuery = graphql`
//     query RecipeDetailQuery($slug: String!) {
//         contentfulRecipe(path: { eq: $slug }) {
//             ...Recipe
//         }
//     }
// `
