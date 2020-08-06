import React from 'react'
import { Col } from 'antd'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { SwapRightOutlined } from '@ant-design/icons'

import { Container } from './styles'

const RecipeThumbnail = ({ image, title, path }) => {
    return (
        <Container xs={24} sm={8} backgroundImage={image.file.url}>
            <Link to={`/by-the-numbers/${path}`}>
                <div className="recipe--image" />
                <div className="recipe--copy">
                    <h5>
                        {title}
                    </h5>
                    <p className="recipe-link">
                        VIEW RECIPE <SwapRightOutlined />
                    </p>
                </div>
            </Link>
        </Container>
    )
}

export default RecipeThumbnail
