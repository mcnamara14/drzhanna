import React from 'react'
import { Col, Row } from 'antd'
import { H1, P } from '../../components/typography/typography'
import Layout from '../../components/layout'

import { Section } from './styles'
import Hero from './Hero/Hero'

const ByTheNumbers = () => {
    return (
        <Layout>
            <Hero />
            <Section type="flex" justify="center">
                <Col xs={18}>ByTheNumbers</Col>
            </Section>
        </Layout>
    )
}

export default ByTheNumbers
