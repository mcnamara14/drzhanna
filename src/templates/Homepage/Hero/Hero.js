import React from 'react'
import Img from 'gatsby-image'
import { Col, Row } from 'antd'
import RichText from '../../../components/RichText/RichText'

import { Copy, Container, Image, InnerContainer, ImageBottom } from './styles'

const Hero = ({ title, image, text }) => {
    return (
        <Container>
            <InnerContainer gutter={60}>
                <Copy xs={24} md={16} lg={12}>
                    <h1>
                        {title}
                    </h1>
                    <RichText content={text.json} />
                    <Image>
                        <Img fluid={image.fluid} />
                    </Image>
                </Copy>
                <ImageBottom>
                    <Img fluid={image.fluid} />
                </ImageBottom>
            </InnerContainer>
        </Container>
    )
}

export default Hero
