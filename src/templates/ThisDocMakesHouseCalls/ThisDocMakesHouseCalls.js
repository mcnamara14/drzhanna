import React from 'react'
import { graphql } from 'gatsby'
import { Col, Row, Form, Input, Button, Checkbox } from 'antd'
import Layout from '../../components/layout'
import InnerWrapper from '../../components/InnerWrapper/InnerWrapper'
import Quote from '../../components/Quote/Quote'
import Hero from './Hero/Hero'
import WatchTheShow from './WatchTheShow/WatchTheShow'

import { Section } from './styles'

const ThisDocMakesHouseCalls = ({ data: { contentfulThisDocMakesHouseCalls }}) => {
    const { heroText, heroImage } = contentfulThisDocMakesHouseCalls
    console.log('contentfulThisDocMakesHouseCalls', contentfulThisDocMakesHouseCalls)
    return (
        <Layout path="/this-doc-makes-house-calls">
            <Section type="flex" justify="center">
                <Hero text={heroText} heroImage={heroImage} />
                <InnerWrapper>
                <Quote
                    quote="To live an aesthetic Life is like being able to fly where others walk"
                    author="Truman Capote"
                />
                <WatchTheShow />
                </InnerWrapper>
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
