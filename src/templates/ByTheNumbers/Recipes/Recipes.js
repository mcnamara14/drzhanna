import React from 'react'
import { Col, Row } from 'antd'
import RecipeThumbnail from '../RecipeThumbnail/RecipeThumbnail'

import { Section } from './styles'

const Recipes = ({ recipes }) => {
    return (
        <Section>
            <Col xs={24}>
                <h2>Recipes</h2>
            </Col>
            <Row gutter={40} className="recipes--thumbnails">
                {recipes.map(recipe => {
                    return <RecipeThumbnail {...recipe} />
                })}
            </Row>
        </Section>
    )
}

export default Recipes
