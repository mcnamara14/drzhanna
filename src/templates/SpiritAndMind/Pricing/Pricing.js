import React from 'react'
import { Col, Row, Form, Input, Button, Checkbox } from 'antd'

import { Container, PricingTable, Services } from './styles'

const Pricing = ({ backgroundImage, text }) => {
    return (
        <Container gutter={60}>
            <Services xs={24} md={12}>
                <div className="spirit-and-mind--pricing-services-title">
                    PRICING
                </div>
                <div className="spirit-and-mind--pricing-services">
                    <div className="spirit-and-mind--pricing-services-copy">
                        <h3>SERVICES</h3>
                        <ul>
                            <li>Cognitive-Behavioral Approach to Life</li>
                            <li>Didactic-Behavioral Approach</li>
                            <li>Spiritual and holistic</li>
                            <li>Practical Life Coaching and Mentoring</li>
                            <li>
                                Specializing in Entertainment and Real Estate
                                Industry
                            </li>
                            <li>Nutritional Psychology</li>
                        </ul>
                    </div>
                </div>
            </Services>
            <PricingTable xs={24} sm={8}>
                <h3>OFFICE</h3>
                <p>30 min - <span>$125/hr</span></p>
                <p>50 min - <span>$200/hr</span></p>
                <p>80 min - <span>$280/hr</span></p>
                <h3>CONCIERGE</h3>
                <p>50 min - <span>$250/hr</span></p>
                <p>80 min - <span>$375/hr</span></p>
                <p>Travel expense - <span>$100/hr</span></p>
                <h3>VIRTUAL</h3>
                <p>30 min - <span>$100/hr</span></p>
                <p>50 min - <span>$175/hr</span></p>
                <p>80 min - <span>$250/hr</span></p>
            </PricingTable>
        </Container>
    )
}

export default Pricing
