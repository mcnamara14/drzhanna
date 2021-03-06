import React from 'react'
import { Col, Row, Form, Input, Button, Checkbox } from 'antd'

import { Container } from './styles'

const Hero = ({ backgroundImage, text }) => {
    return (
        <Container backgroundImage={backgroundImage}>
            <div className="spirit-and-mind--hero-copy">
                <span>
                    <h1>SPIRIT and MIND</h1>
                    <p>{text}</p>
                </span>
            </div>
        </Container>
    )
}

export default Hero
