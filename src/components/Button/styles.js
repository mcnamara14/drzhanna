import styled from 'styled-components'
import { Button } from 'antd'

const StyledButton = styled(Button)`
    background: #d0a72d;
    border: none;
    height: 45px;
    width: auto;
    margin: ${({ margin }) => margin};

    &:hover {
      background: #bb9524;
    }

    span {
      margin-top: 10px;
      font-weight: lighter;
      font-size: 14px;
    }
`

export { StyledButton }
