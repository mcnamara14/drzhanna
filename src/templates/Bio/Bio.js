import React from 'react'
import Img from 'gatsby-image'
import { Col, Row } from 'antd'
import Layout from '../../components/layout'
import InnerWrapper from '../../components/InnerWrapper/InnerWrapper'
import RichText from '../../components/RichText/RichText';
import signature from '../../images/signature.png'

import { Section } from './styles'

const Bio = ({ data: { contentfulBio } }) => {
    const image = contentfulBio.image.fluid
    const bio = contentfulBio.bio.bio
    const bioCopy = contentfulBio.bioCopy

    return (
        <Layout path="/bio">
            <Section type="flex" justify="center">
                <Col xs={24} md={20}>
                    <Row type="flex" justify="center" gutter={60}>
                        <Col xs={18} sm={8}>
                            <Img fluid={image} />
                        </Col>
                        <Col xs={20} sm={12}>
                            <h1>Dr. Zhanna</h1>
                            <p>
                                <b>My story...</b>
                            </p>
                            <RichText content={bioCopy.json} />
                            <p>
                                <b>Dr. Zhanna</b>
                            </p>
                            <img src={signature} className="signature"/>
                        </Col>
                    </Row>
                </Col>
            </Section>
        </Layout>
    )
}

export default Bio

export const BioQuery = graphql`
    query BioQuery {
        contentfulBio(internalName: { eq: "Bio Page" }) {
            ...Bio
        }
    }
`
