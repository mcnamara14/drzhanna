import React from 'react'
import { Col, Row, Form, Input, Button, Checkbox } from 'antd'
import Layout from '../../components/layout'
import Hero from './Hero/Hero'
import HouseCalls from './HouseCalls/HouseCalls'

import { Section } from './styles'
import InnerWrapper from '../../components/InnerWrapper/InnerWrapper'

const Homepage = ({ data: { contentfulHomepage } }) => {
    const {
        heroText,
        heroImage,
        heroTitle,
        houseCallsText,
        houseCallsImage
    } = contentfulHomepage

    console.log('contentfulHomepage', contentfulHomepage)
    return (
        <Layout path="/">
            <Section type="flex" justify="center">
                <Hero text={heroText} image={heroImage} title={heroTitle} />
            </Section>
            <InnerWrapper>
                <HouseCalls text={houseCallsText} image={houseCallsImage} />
            </InnerWrapper>
        </Layout>
    )
}

export default Homepage

export const HomepageQuery = graphql`
    query HomepageQuery {
        contentfulHomepage(internalName: { eq: "Homepage" }) {
            ...Homepage
        }
    }
`
