import React from 'react'
import { Col, Row, } from 'antd'
import { H1, P } from '../../components/typography/typography'
import Layout from '../../components/layout'
import { Section } from './styles'
import ContactForm from './ContactForm/ContactForm'
import facebookIcon from '../../images/facebook-icon.png'
import instagramIcon from '../../images/instagram-icon.png'

const Contact = () => {
    return (
        <Layout path="/contact">
            <Section type="flex" justify="center">
                <Col xs={20} xl={16}>
                    <Row type="flex" gutter={60}>
                        <Col xs={24} sm={12}>
                            <H1 color="#000000">Contact Dr Zhanna</H1>
                            <P color="#000000">
                                Interested in finding out more about one of our
                                services? Fill out the form and we will get back
                                to you shortly. You can also contact us by phone
                                and email. We look forward to speaking with you.<br />
                                <br />
                            </P>
                            <P color="#000000">
                                Phone{' '}
                                <span className="gold-text">
                                    (858) 633-7944
                                </span>
                            </P>
                            <P color="#000000">
                                Email{' '}
                                <span className="gold-text">
                                    <a href="mailto:drzhanna@drzhanna.com">
                                        drzhanna@drzhanna.com
                                    </a>
                                </span>
                            </P>
                            <P color="#000000">
                                Follow us on <a href="https://www.facebook.com/Dr-Zhanna-101592835098219" target="_blank"><img src={facebookIcon} /></a><a href="https://www.instagram.com/drzhanna90210/" target="_blank"><img src={instagramIcon} /></a>
                            </P>
                        </Col>
                        <Col xs={24} sm={12}>
                            <ContactForm />
                        </Col>
                    </Row>
                </Col>
            </Section>
        </Layout>
    )
}

export default Contact
