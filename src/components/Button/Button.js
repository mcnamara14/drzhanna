import React from 'react'
import PropTypes from 'prop-types'
import { SwapRightOutlined } from '@ant-design/icons'

import { StyledButton } from './styles'

const Button = ({ title, icon, margin }) => {
    return (
        <StyledButton type="primary" htmlType="submit" margin={margin} >
            {title} {icon}
        </StyledButton>
    )
}

export default Button

Button.defaultProps = {
    icon: <SwapRightOutlined />
}
