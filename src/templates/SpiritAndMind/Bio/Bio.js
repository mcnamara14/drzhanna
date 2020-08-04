import React from 'react'
import { Col, Row } from 'antd'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import InnerWrapper from '../../../components/InnerWrapper/InnerWrapper'

import { Container, Image } from './styles'

const Bio = ({ image, text }) => {
    return (
        <Container>
            <InnerWrapper>
                <Row gutter={{xs: 40, sm: 40, md: 100}} className="spirit-and-mind--bio">
                    <Image xs={18} sm={8}>
                        <Img fluid={image.fluid} />
                    </Image>
                    <Col xs={24} sm={16}>
                        <h2>Dr Zhanna</h2>
                        <p>{text}</p>
                        <p className="spirit-and-mind--bio-link"><Link to="/bio">read full bio</Link></p>
                    </Col>
                </Row>
            </InnerWrapper>
        </Container>
    )
}

export default Bio