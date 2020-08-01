import styled from 'styled-components'
import { Form } from 'antd'

const StyledFormItem = styled(Form.Item)`
  input, .ant-select-selector {
    height: 50px !important;
    display: flex;
    align-items: center;
    border: 2px solid #d0a72d !important;
  }

  textarea {
    height: 200px !important;
    border: 2px solid #d0a72d;
  }

  textarea::placeholder, input::placeholder, .ant-select-selection-placeholder {
    font-size: 20px;
    opacity: 0.6;
    color: #CCC;
  }
`

export { StyledFormItem }
