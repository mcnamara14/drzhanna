import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { Col, Row } from 'antd'
import RichText from '../../../components/RichText/RichText'
import spiritAndMindImage from '../../../images/spirit-and-mind-home-image.png'
import Button from '../../../components/Button/Button'

import { Copy, Container, InnerContainer, Image } from './styles'

const SpiritAndMind = ({ title, image, text }) => {
    return (
        <Container gutter={100} type="flex" justify="center">
            <InnerContainer xs={18} xxl={16}>
                <Row>
                    <Col xs={24} md={12}>
                        <p className="home-page--spirit-and-mind--headline">
                            LIFE COACHING SERVICES
                        </p>
                        <h1>SPIRIT and MIND</h1>
                        <img src={spiritAndMindImage} className="home-page--spirit-and-mind--mobile-image"/>
                        <p>Dr. Zhanna has been helping people improve their lives through holistic, practical approach to emotional, psychological, and mental obstacles. There is nothing in life more exciting then being able to conquer old demons or overcome new challenges. We have been able to help people have more fulfilling relationships, be more successful in their financial world and most importantly fulfill themselves from within.</p>
                        <Link to="/spirit-and-mind"><Button title="LEARN MORE" /></Link>
                    </Col>
                    <Col xs={12} className="home-page--spirit-and-mind--image">
                        <img src={spiritAndMindImage} />
                    </Col>
                </Row>
            </InnerContainer>
        </Container>
    )
}

export default SpiritAndMind
