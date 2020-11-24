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
                            <p>I have been a psychologist now for over Fifteen years and have been practicing in Beverly Hills specializing in high-net worth individuals with highly stressful life and work environments. Helping them de-stress and optimize all that life has to offer. I have also dedicated part of my practice to working with severely mentally ill. Helping people with debilitating mental health issues deal with everyday life has been an honor of my career.</p>
                            <p>As one of my creative outlets I began renovating and designing projects years ago, at first as a hobby doing one or two properties here and there and as time progressed I realized that my passion for renovation and design ran deep. I also realized that I was applying my psychology techniques in my renovation projects and it was working! I have now completed dozens of successful projects and plan to bring my knowledge and unique perspective to the public to share with others my tips and advice on how to renovate, beautify and increase the value of their home.</p>
                            <p>My other passion, cooking took hold in my early 20s when I was helping my father run large scale contemporary cuisine restaurants. I watched our chefs make amazing French, Italian and Asian Fusion dishes, but as with everything I do, I could not resist putting my own spin on it. I began to develop my own style of cooking focusing on quick, convenient, health-conscious, low calorie recipes. Over the years my friends have been asking me to write down these recipes and put them in a book already! It took some time, but here it is! <span className="bio--by-the-numbers"><span className="bio--letter-spacing"><span className="bio--quote">“ </span>By</span> The Numbers<span className="bio--quote">”</span></span> <span className="bio--subtitle">under $5 to buy; under 20 minutes to make; and under 300 calories to eat</span>, is a simple, short and I hope helpful guide to my own personal weight loss and maintenance program with all the recipes that make it easy to lose weight and keep it off. The secret sauce I’ve discovered over the years is that it’s still about the numbers, of calories that is, and the rest is all about the “core”. When you work out, make sure that all your exercises involve your core! That’s it! It’s that simple!</p>
                            <p>Putting this website together was a labor of love for me. I hope that readers find it helpful, useful, or just plain entertaining. As always I welcome your comments, suggestions, and concerns…</p>
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
