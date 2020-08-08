import React from 'react'
import { Col, Row } from 'antd'
import { H1, P } from '../../../components/typography/typography'

import { Section, InnerContainer, Title } from './styles'

const Hero = () => {
    return (
        <Section type="flex" justify="center">
            <InnerContainer xs={22} lg={10}>
                <h1>
                    <span>By</span> The Numbers
                </h1>
                <p>
                    <span>
                        Under $5 to buy; Under 15 minutes to make; and Under 300
                        cal. to eat; Recipe for Success!
                    </span>
                </p>
                <p>
                    These recipes are not only fast and low cal, they are really
                    good! The most important part of successful weight loss program is
                    not feeling hungry, but eating fewer calories usually means
                    giving up portions. With these low calorie recipes you can
                    have both amazing taste and good size portions, actually
                    great size portions! So you will never be hungry, yet eat a
                    lot fewer calories. What more can one ask for!
                </p>
            </InnerContainer>
        </Section>
    )
}

export default Hero
