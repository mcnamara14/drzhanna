import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { Col, Row } from 'antd'
import RichText from '../../../components/RichText/RichText'
import SplitPlayButton from '../../../components/SplitButton/SplitPlayButton';

import { Copy, Container, Image } from './styles'

const HouseCalls = ({ title, image, text }) => {
    return (
        <Container>
            <Row gutter={100} type="flex" justify="center">
                <Image xs={24} md={8} backgroundImage={image.file.url}>
                    <SplitPlayButton />
                </Image>
                <Copy xs={24} md={12}>
                    <h1>This Doc Makes House Calls</h1>
                    <RichText content={text.json} />
                    <button><Link to="/this-doc-makes-house-calls">LEARN ABOUT THE SHOW</Link></button>
                </Copy>
            </Row>
        </Container>
    )
}

export default HouseCalls
