import styled from 'styled-components'
import { Modal } from 'antd';

const Container = styled(Modal)`
  height: 500px;

  .mail-chimp-modal--image {
    background: ${({ bgImage}) => `url(${bgImage})`};
    background-size: cover;
  }

  .ant-modal-content {
    width: 900px;
  }

  .ant-row {
    height: 100%;
  }

  .ant-modal-footer {
    display: none;
  }

  .ant-modal-body {
    padding: 0;
    height: 500px;
  }

  .mail-chimp-modal--form {
    padding: 20px;

    button {
      background: #d0a72d;
      border: none;
      height: 45px;
      width: auto;
      text-shadow: 0 -1px 0 rgba(0,0,0,.12);
      box-shadow: 0 2px 0 rgba(0,0,0,.045);
      color: white;
      margin-top: 10px;
      font-weight: lighter;
      font-size: 14px;
      padding: 4px 15px;
      border-radius: 2px;
      letter-spacing: 1px;

      &:hover {
        background: #bb9524;
      }

      span {
        margin-top: 10px;
        font-weight: lighter;
        font-size: 14px;
      }
    }

    input {
      border: 1px solid #eee;
      width: 100%;
      margin-bottom: 20px;
      padding: 10px;
    }
  }
    
`

export { Container }