import React from 'react'
import Img from 'gatsby-image'
import { Col, Row } from 'antd'
import Layout from '../../components/layout'

import { Section } from './styles'
import InnerWrapper from '../../components/InnerWrapper/InnerWrapper'

const Bio = ({ data: { contentfulBio } }) => {
    const image = contentfulBio.image.fluid
    const bio = contentfulBio.bio.bio

    return (
        <Layout path="/bio">
            <Section type="flex" justify="center">
                <Col xs={24} md={20}>
                    <Row type="flex" justify="center" gutter={60}>
                        <Col xs={18} sm={8}>
                            <Img fluid={image} />
                        </Col>
                        <Col xs={24} sm={12}>
                            <h1>Dr. Zhanna</h1>
                            <p>
                                <b>My story...</b>
                            </p>
                            <p>
                                {bio}
                            </p>
                            <p>
                                <b>Dr. Zhanna</b>
                            </p>
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
