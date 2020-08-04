import React from 'react'
import { graphql } from 'gatsby'
import { Col, Row, Form, Input, Button, Checkbox } from 'antd'
import Layout from '../../components/layout'
import InnerWrapper from '../../components/InnerWrapper/InnerWrapper'
import Quote from '../../components/Quote/Quote'
import Hero from './Hero/Hero'
import WatchTheShow from './WatchTheShow/WatchTheShow'
import RenovationGallery from './RenovationGallery/RenovationGallery'

import { Section } from './styles'

const ThisDocMakesHouseCalls = ({
    data: { contentfulThisDocMakesHouseCalls }
}) => {
    const { heroText, heroImage } = contentfulThisDocMakesHouseCalls
    console.log(
        'contentfulThisDocMakesHouseCalls',
        contentfulThisDocMakesHouseCalls
    )
    return (
        <Layout path="/this-doc-makes-house-calls">
            <Section type="flex" justify="center">
                <Hero text={heroText} heroImage={heroImage} />
                <InnerWrapper>
                    <Quote
                        quote="To live an aesthetic Life is like being able to fly where others walk"
                        author="Truman Capote"
                    />
                    <div className="house-calls--overview">
                        <p>My passion for esthetic and design and my training in psychology has led me into the world of real estate where I apply my knowledge of psychology to my home renovation projects, while having tremendous fun working with my best friends.</p>
                        <p>It is this synergy of psychology and home renovation that produces a unique concept for what we hope to be an entertaining and educational reality show with a funny and unique approach working with contractors, RE agents, and assistants finding neglected, abandoned properties in need of my “special” touch, bringing them back to life and finding the perfect homeowners to live there happily-ever-after.</p>
                        <p>I hope our show helps people tackle their renovation projects, inspire them to create an amazing personal space and make them some money in the process!</p>
                    </div>
                    <WatchTheShow />
                </InnerWrapper>
                <RenovationGallery />
            </Section>
        </Layout>
    )
}

export default ThisDocMakesHouseCalls

export const ThisDocMakesHouseCallsQuery = graphql`
    query ThisDocMakesHouseCallsQuery {
        contentfulThisDocMakesHouseCalls(
            internalName: { eq: "This Doc Makes House Calls Page" }
        ) {
            ...ThisDocMakesHouseCalls
        }
    }
`
