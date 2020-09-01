import React from 'react'
import { graphql } from 'gatsby'
import { Col, Row, Form, Input, Button, Checkbox } from 'antd'
import { H1, P } from '../../components/typography/typography'
import Layout from '../../components/layout'
import Hero from './Hero/Hero'
import InnerWrapper from '../../components/InnerWrapper/InnerWrapper'
import Quote from '../../components/Quote/Quote'
import Pricing from './Pricing/Pricing';
import Bio from './Bio/Bio';

import { Section } from './styles'

const SpiritAndMind = ({ data: { contentfulSpiritAndMind } }) => {
    const { heroImage, heroText, bio, bioImage } = contentfulSpiritAndMind

    return (
        <Layout path="/spirit-and-mind">
            <Section type="flex" justify="center">
                <Hero
                    backgroundImage={heroImage.file.url}
                    text={heroText.heroText}
                />
            </Section>
            <InnerWrapper>
                <Quote
                    quote="Do the thing you fear most and the death of Fear is certain"
                    author="Mark Twain"
                />
                <Pricing />
            </InnerWrapper>
            <Bio image={bioImage} text={bio.json}/>
        </Layout>
    )
}

export default SpiritAndMind

export const SpiritAndMindQuery = graphql`
    query SpiritAndMindQuery {
        contentfulSpiritAndMind(internalName: { eq: "Spirit and Mind Page" }) {
            ...SpiritAndMind
        }
    }
`
