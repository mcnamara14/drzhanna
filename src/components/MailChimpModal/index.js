import { Col, Grid, Row } from 'antd';
import React, { useEffect, useState } from 'react';
// import Mailchimp from 'react-mailchimp-form'
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import image from '../../images/by-the-numbers--hero-bg.jpg';

import { Container } from './styles';

const CustomForm = ({ status, message, onValidated }) => {
  let email, firstName, lastName;

  const submit = () =>
    email &&
    firstName &&
    lastName &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      FNAME: firstName.value,
      LNAME: lastName.value,
    });

  return (
    <div
      style={{
        background: '#efefef',
        borderRadius: 2,
        padding: 10,
        display: 'inline-block',
      }}
    >
      {status === 'sending' && (
        <div style={{ color: '#d0a72d' }} className="mail-chimp-form--status">
          sending...
        </div>
      )}
      {status === 'error' && (
        <div
          style={{ color: 'coral' }}
          dangerouslySetInnerHTML={{ __html: message }}
          className="mail-chimp-form--status"
        />
      )}
      {status === 'success' && (
        <div
          style={{ color: '#d0a72d' }}
          dangerouslySetInnerHTML={{ __html: message }}
          className="mail-chimp-form--status"
        />
      )}
      <input
        ref={(node) => (firstName = node)}
        type="text"
        placeholder="First Name"
      />
      <input
        ref={(node) => (lastName = node)}
        type="text"
        placeholder="Last Name"
      />
      <input ref={(node) => (email = node)} type="email" placeholder="Email" />
      <button onClick={submit}>ENTER TO WIN</button>
    </div>
  );
};

const MailChimpModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { useBreakpoint } = Grid;

  const { md } = useBreakpoint();

  const isMobile = !md;

  useEffect(() => {
    setTimeout(() => {
      setIsModalOpen(true);
    }, 2000);
  }, []);

  const url =
    'https://drzhanna.us2.list-manage.com/subscribe/post?u=863a065d37813a158479e0f3d&amp;id=42565cb0c8';

  return (
    <Container
      visible={isModalOpen}
      bgImage={image}
      width={isMobile ? '90vw' : 900}
      onCancel={() => setIsModalOpen(false)}
    >
      <Row>
        <Col xs={24} md={12} className="mail-chimp-modal--image" />
        <Col xs={24} md={12} className="mail-chimp-modal--form">
          <h2>
            Win a Free copy of {!isMobile && <br />}Dr. Zhanna’s New Recipe Book{' '}
            {!isMobile && <br />}
            <span>
              <span>By</span> The Numbers
            </span>{' '}
            !
          </h2>
          <p>
            Submit your name and email address to receive Dr. Zhanna’s new book,
            By the Numbers, for free.
          </p>
          <div className="mail-chimp-modal--form-fields">
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={(formData) => subscribe(formData)}
                />
              )}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MailChimpModal;
