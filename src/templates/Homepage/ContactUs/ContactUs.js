import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { Col, Row } from 'antd'
import beachBackground from '../../../images/beach-background.jpg'
import Button from '../../../components/Button/Button'

import { Container, InnerContainer } from './styles'

const ContactUs = () => {
    return (
        <Container backgroundImage={beachBackground} type="flex" justify="center" >
            <InnerContainer xs={22} md={12}>
                <h3>Want to learn more or book a consultation?</h3>
                <Link to="/contact"><Button title="Contact Dr Zhanna" /></Link>
            </InnerContainer>
        </Container>
    )
}

export default ContactUs
