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
                        <p>Spirit and Mind is a concierge psychology and life coaching service.</p>
                        <p>We will travel to your Office, Home, On Location or Set, even go with you on Vacation, Office or Virtual visits all available by appointment only.</p>
                        <p>We are here to help people with busy, hectic lives and high octane careers to maximize their potential and minimize their stress. We are here to help you be the best that you can possibly be.</p>
                        <p>No Apologies, Compromises or Excuses!</p>
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
