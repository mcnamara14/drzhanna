import React from 'react'
import { graphql } from 'gatsby'
import { Col, Row, Form, Input, Button, Checkbox } from 'antd'
import Layout from '../../components/layout'
import InnerWrapper from '../../components/InnerWrapper/InnerWrapper'
import Hero from './Hero/Hero'

import { Section } from './styles'

const ThisDocMakesHouseCalls = ({ data: { contentfulThisDocMakesHouseCalls }}) => {
    const { heroText, heroImage } = contentfulThisDocMakesHouseCalls
    console.log('contentfulThisDocMakesHouseCalls', contentfulThisDocMakesHouseCalls)
    return (
        <Layout path="/this-doc-makes-house-calls">
            <Section type="flex" justify="center">
                <Hero text={heroText} heroImage={heroImage} />
                <InnerWrapper>Inner</InnerWrapper>
            </Section>
        </Layout>
    )
}

export default ThisDocMakesHouseCalls

export const ThisDocMakesHouseCallsQuery = graphql`
    query ThisDocMakesHouseCallsQuery {
        contentfulThisDocMakesHouseCalls(internalName: { eq: "This Doc Makes House Calls Page" }) {
            ...ThisDocMakesHouseCalls
        }
    }
`
