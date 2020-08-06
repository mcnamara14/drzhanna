import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { Col, Row } from 'antd'
import RichText from '../../../components/RichText/RichText'
import Button from '../../../components/Button/Button'

import { Copy, Container, Image, InnerContainer, ImageBottom } from './styles'

const Hero = ({ title, image, text }) => {
    return (
        <Container>
            <InnerContainer gutter={60}>
                <Copy xs={24} md={16} lg={12} xxl={11}>
                    <h1>
                        {title}
                    </h1>
                    <RichText content={text.json} />
                    <Link to="/bio"><Button title="READ FULL BIO" margin="30px 0 0 0"/></Link>
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
