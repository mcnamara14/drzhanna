import React from 'react'
import { Col, Row } from 'antd'
import { H1, P } from '../../components/typography/typography'
import Layout from '../../components/layout'
import Quote from '../../components/Quote/Quote'
import Hero from './Hero/Hero'
import InnerWrapper from '../../components/InnerWrapper/InnerWrapper'

import { Section } from './styles'

const ByTheNumbers = () => {
    return (
        <Layout>
            <Hero />
            <InnerWrapper>
                <Quote quote="My doctor told me I had to stop throwing intimate dinners for four unless there are three other people." author="Orson Welles" />
                <Section type="flex" justify="center">
                    <Col xs={18}>ByTheNumbers</Col>
                </Section>
            </InnerWrapper>
        </Layout>
    )
}

export default ByTheNumbers
