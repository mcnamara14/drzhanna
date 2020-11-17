import styled from 'styled-components'
import { Modal } from 'antd';

const Container = styled(Modal)`

  .mail-chimp-modal--image {
    background: ${({ bgImage}) => `url(${bgImage})`};
    background-size: cover;
  }

  .mail-chimp-modal--form-fields {
    margin-top: 25px;
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
  }

  .mail-chimp-modal--form {
    padding: 20px 60px 20px 20px;

    button {
      background: #d0a72d;
      border: none;
      height: 45px;
      width: 100%;
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
      border-radius: 3px;
      width: 100%;
      margin-bottom: 10px;
      padding: 10px;
      display: block;
    }

    h2 {
      font-family: "Playfair Display";
      font-weight: 500;
      line-height: 140%;
      font-size: 36px;
      margin-bottom: 10px;
    }

    p {
      font-family: Montserrat;
      font-size: 14px;
      line-height: 22px;
    }

    span {
      font-family: Landscape Land;
      font-size: 46px;
      color: #d0a72d;
      margin: 0;

      span {
        letter-spacing: -7px;
      }
    }
  }
    
`

export { Container }