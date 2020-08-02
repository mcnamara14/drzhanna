import React from 'react'
import Header from '../../components/Header/Header'
import { Col, Row, Form, Input, Button, Checkbox } from 'antd'
import { H1, P } from '../../components/typography/typography'
import Layout from '../../components/layout'

import { Section } from './styles'
import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
    return (
        <Layout>
            <Section type="flex" justify="center">
                <Col xs={18}>
                    <Row type="flex" gutter={60}>
                        <Col xs={12}>
                            <H1 color="#000000">Contact Dr Zhanna</H1>
                            <P color="#000000">
                                Interested in finding out more about one of our
                                services? Fill out the form and we will get back
                                to you shortly. You can also contact us by phone
                                and email. We look forward to speaking with you<br />
                                <br />
                            </P>
                            <P color="#000000">
                                Phone{' '}
                                <span className="gold-text">
                                    (555) 555 - 5555
                                </span>
                            </P>
                            <P color="#000000">
                                Email{' '}
                                <span className="gold-text">
                                    drzhanna@yahoo.com
                                </span>
                            </P>
                        </Col>
                        <Col xs={12}>
                            <ContactForm />
                        </Col>
                    </Row>
                </Col>
            </Section>
        </Layout>
    )
}

export default Contact
