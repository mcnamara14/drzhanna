import React from 'react'
import { Col, Row } from 'antd'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import RichText from '../../../components/RichText/RichText'
import InnerWrapper from '../../../components/InnerWrapper/InnerWrapper'

import { Container, Image } from './styles'

const Bio = ({ image, text }) => {
    return (
        <Container>
            <InnerWrapper>
                <Row gutter={{xs: 40, sm: 40, md: 60}} className="spirit-and-mind--bio">
                    <Image xs={18} sm={8}>
                        <Img fluid={image.fluid} />
                    </Image>
                    <Col xs={24} sm={16}>
                        <h2>Dr Zhanna</h2>
                        <RichText content={text} />
                    </Col>
                </Row>
            </InnerWrapper>
        </Container>
    )
}

export default Bio
