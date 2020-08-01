import React from 'react'
import Header from '../../components/Header/Header'
import { Col } from 'antd';
import { H1 } from '../../components/typography/typography';

import { StyledRow } from './styles'

const Contact = () => {
    return (
      <>
        <Header />
        <StyledRow type="flex" justify="center">
            <Col xs={18}>
                <H1 color="#000000">Contact Dr Zhanna</H1>
            </Col>
        </StyledRow>   
        </>
    )
}

export default Contact
