import React from 'react'
import Header from '../../components/Header/Header'
import { Col, Row, Form, Input, Button, Checkbox } from 'antd'
import { H1, P } from '../../components/typography/typography'

import { Section } from './styles'
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
    return (
        <React.Fragment>
            <Header />
            <Section type="flex" justify="center">
                <Col xs={18}>
                    <Row type="flex" gutter={60}>
                        <Col xs={12}>
                            <H1 color="#000000">Contact Dr Zhanna</H1>
                            <P color="#000000">
                                Interested in finding out more about one of our
                                services? Fill out the form and we will get back
                                to you shortly. You can also contact us by phone
                                and email. We look forward to speaking with you
                            </P>
                        </Col>
                        <Col xs={12}>
                            <ContactForm />
                        </Col>
                    </Row>
                </Col>
            </Section>
        </React.Fragment>
    )
}

export default Contact
