import React from 'react'
import Img from 'gatsby-image'
import { Col, Row } from 'antd'
import RichText from '../../../components/RichText/RichText'

import { Copy, Container, Image } from './styles'

const Hero = ({ heroImage, text }) => {
    return (
        <Container>
            <Row gutter={60} type="flex" justify="center">
                <Copy xs={19} lg={12} xxl={10}>
                    <h1>This Doc Makes House Calls</h1>
                    <p className="this-doc-makes-house-calls--subhead">
                        RENOVATION THROUGH PSYCHOLOGY
                    </p>
                    <RichText content={text.json} />
                    <Image>
                        <Img fluid={heroImage.fluid} />
                    </Image>
                </Copy>
            </Row>
        </Container>
    )
}

export default Hero
