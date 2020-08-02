import React from 'react'
import { Col, Row } from 'antd'

import { Section } from './styles'
import Recipe from '../Recipe/Recipe'

const Recipes = ({ edges }) => {
    const recipes = edges.map(({ node }) => node)

    return (
        <Section>
            <Col xs={24}>
                <h2>Recipes</h2>
            </Col>
            <Row gutter={40}>
                {recipes.map(recipe => {
                    return <Recipe {...recipe} />
                })}
            </Row>
        </Section>
    )
}

export default Recipes
