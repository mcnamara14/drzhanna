import styled from 'styled-components'
import { Modal } from 'antd';

const Container = styled(Modal)`
  .mail-chimp-modal--image {
    background: ${({ bgImage}) => `url(${bgImage})`};
    background-size: cover;
  }

  .mail-chimp-form--status {
    margin-bottom: 10px;
  }

  .mail-chimp-modal--form-fields {
    margin-top: 25px;

    div {
      width: 100% !important;
      background: none !important;
      padding: 0 !important;
    }

    input {
      border: 1px solid #eee;
      border-radius: 3px;
      width: 100%;
      padding: 10px 10px 10px 20px !important;
      display: flex;
      align-items: center;
      font-size: 16px !important;
      margin-bottom: 10px;

      &::placeholder {
        font-size: 16px;
        color: #aaa;
      }

      &:focus {
        outline: 1px solid gold;
      }
    }
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
    padding: 25px 60px 25px 25px;

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

      &:focus {
        outline: none;
      }

      &:hover {
        background: #bb9524;
        cursor: pointer;
      }

      span {
        margin-top: 10px;
        font-weight: lighter;
        font-size: 14px;
      }
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
      padding-right: 10px;

      @media (max-width: 768px) {
        padding-right: 50px;
      }
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

  @media (max-width: 950px) {
    .ant-modal-content {
      width: 100%;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    top: 20px;

    .mail-chimp-modal--image {
      height: 175px;
    }

    h2 {
      font-size: 22px !important;
    }

    span {
      font-size: 34px !important;
    }

    .mail-chimp-modal--form {
      padding: 25px;
    }
  } 
`

export { Container }