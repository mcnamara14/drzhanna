import React from 'react'
import { Col, Row, Form, Input, Button, Checkbox } from 'antd'
import { H1, P } from '../../components/typography/typography'
import Layout from '../../components/layout'
import Hero from './Hero/Hero'
import InnerWrapper from '../../components/InnerWrapper/InnerWrapper'
import Quote from '../../components/Quote/Quote'
import Pricing from './Pricing/Pricing';

import { Section } from './styles'
import Bio from './Bio/Bio';

const SpiritAndMind = ({ data: { contentfulSpiritAndMind } }) => {
    console.log('props', contentfulSpiritAndMind)
    return (
        <Layout path="/contact">
            <Section type="flex" justify="center">
                <Hero
                    backgroundImage={contentfulSpiritAndMind.heroImage.file.url}
                    text={contentfulSpiritAndMind.heroText.heroText}
                />
            </Section>
            <InnerWrapper>
                <Quote
                    quote="Do the thing you fear most and the death of Fear is certain"
                    author="Mark Twain"
                />
                <Pricing />
            </InnerWrapper>
            <Bio image={contentfulSpiritAndMind.bioImage} text={contentfulSpiritAndMind.bioText.bioText}/>
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
