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

  input::focus, textarea::focus, .ant-input::focus, .ant-input-focused {
    border-color: white !important;
    box-shadow: none !important;
  }

  textarea::placeholder, input::placeholder, .ant-select-selection-placeholder {
    font-size: 20px;
    opacity: 0.6;
    color: #CCC;
  }

  .ant-select-arrow {
    height: 32px;
    width: 40px;
    background: #d0a72d;
    top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      color: white;
    }
  }

  button {
    background: #d0a72d;
    border: none;
    height: 50px;
    width: 115px;

    &:hover {
      background: #bb9524;
    }

    span {
      margin-top: 10px;
      font-weight: lighter;
      font-size: 16px;
    }
  }
`

const StyledForm = styled(Form)`
  @media (max-width: 576px) {
    margin-top: 40px;
  }
`

export { StyledFormItem, StyledForm }
