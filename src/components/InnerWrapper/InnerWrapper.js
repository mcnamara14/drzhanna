import React from 'react'
import { Col, Row } from 'antd'

import { StyledRow } from './styles'

const InnerWrapper = ({ children }) => {
  return (
    <StyledRow justify="center" type="flex">
      <Col xs={22} lg={16}>{children}</Col>
    </StyledRow>
  )
}

export default InnerWrapper