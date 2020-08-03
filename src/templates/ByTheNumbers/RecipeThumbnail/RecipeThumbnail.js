import React from 'react'
import { Col } from 'antd'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { SwapRightOutlined } from '@ant-design/icons'

import { Container } from './styles'

const RecipeThumbnail = ({ image, title, path }) => {
    return (
        <Container xs={24} sm={8} backgroundImage={image.file.url}>
            <div className="recipe--image" />
            <div className="recipe--copy">
                <h5>
                    {title}
                </h5>
                <Link to={`/by-the-numbers/${path}`}>VIEW RECIPE <SwapRightOutlined /></Link>
            </div>
        </Container>
    )
}

export default RecipeThumbnail
