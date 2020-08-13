import React from 'react'
import { Col } from 'antd'
import Layout from '../../components/layout'
import logo from '../../images/drzhanna-website-logo.jpg'

import { Section } from './styles'

const ComingSoon = () => {
    return (
        <Section type="flex" justify="center">
            <Col xs={24} md={20}>
                <img src={logo} />
                <h2>Coming soon!</h2>
            </Col>
        </Section>
    )
}

export default ComingSoon

