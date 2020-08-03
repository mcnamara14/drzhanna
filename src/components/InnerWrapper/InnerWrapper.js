import React from 'react'
import { Col, Row } from 'antd'

import { StyledRow } from './styles'

const InnerWrapper = ({ children }) => {
  return (
    <StyledRow justify="center" type="flex">
      <Col xs={22} md={20} lg={18} xl={16}>{children}</Col>
    </StyledRow>
  )
}

export default InnerWrapper