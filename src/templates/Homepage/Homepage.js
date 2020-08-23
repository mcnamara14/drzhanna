import React from 'react'
import { Col, Row, Form, Input, Button, Checkbox } from 'antd'
import Layout from '../../components/layout'
import Hero from './Hero/Hero'
import HouseCalls from './HouseCalls/HouseCalls'
import InnerWrapper from '../../components/InnerWrapper/InnerWrapper'
import SpiritAndMind from './SpiritAndMind/SpiritAndMind';
import ContactUs from './ContactUs/ContactUs';
import ByTheNumbers from './ByTheNumbers/ByTheNumbers';
import watchTheShowImg from '../../images/this-doc-makes-house-calls-coming-soon.jpg'

import { Section } from './styles'

const Homepage = ({ data: { contentfulHomepage } }) => {
    const {
        heroText,
        heroImage,
        heroTitle,
        houseCallsText,
        houseCallsImage
    } = contentfulHomepage

    return (
        <Layout path="/">
            <Section type="flex" justify="center">
                <Hero text={heroText} image={heroImage} title={heroTitle} />
            </Section>
            <InnerWrapper>
                <HouseCalls text={houseCallsText} image={watchTheShowImg} />
            </InnerWrapper>
            <SpiritAndMind />
            <ContactUs />
            <ByTheNumbers />
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
