import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import Mailchimp from 'react-mailchimp-form'

import image from '../../images/this-doc-makes-housecalls--img.jpg'

import { Container } from './styles'
 
const MailChimpModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      // setIsModalOpen(false)
    }, 8000)
  }, [])

  const fields = [
    {
      name: 'EMAIL',
      placeholder: 'Email',
      type: 'email',
      required: true
    },
    {
      name: 'FNAME',
      placeholder: 'First Name',
      type: 'text',
      required: false
    },
    {
      name: 'LNAME',
      placeholder: 'Last Name',
      type: 'text',
      required: false
    }
  ]

    return (
      <Container
        visible={isModalOpen}
        bgImage={image}
        width={900}
        // onOk={this.handleOk}
        // onCancel={this.handleCancel}
      >
        <Row>
          <Col xs={12} className="mail-chimp-modal--image" />
          <Col xs={12} className="mail-chimp-modal--form">
            <h2>Win a Free copy of Dr. Zhanna’s New Recipe Book <span><span>By</span> The Numbers</span> !</h2>
            <p>Submit your name and email address to receive Dr. Zhanna’s new book, By the Numbers, for free.</p>
            <div className="mail-chimp-modal--form-fields">
              <Mailchimp
                action='https://drzhanna.us2.list-manage.com/subscribe/post?u=863a065d37813a158479e0f3d&amp;id=42565cb0c8'
                fields={fields}
                messages = {
                  {
                    sending: "Sending...",
                    success: "Thank you for subscribing!",
                    error: "An unexpected internal error has occurred.",
                    empty: "You must write an e-mail.",
                    duplicate: "Too many subscribe attempts for this email address",
                    button: "ENTER FOR A CHANCE TO WIN"
                  }
                }
              />
            </div>
          </Col>
        </Row>
     </Container>
    );
}
 
export default MailChimpModal;