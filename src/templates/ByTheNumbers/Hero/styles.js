import styled from 'styled-components'
import { Col, Row } from 'antd'
import backgroundImage from '../../../images/by-the-numbers--hero-bg.jpg'

const Section = styled(Row)`
  background-image: url(${backgroundImage});
  background-size: cover;
  height: 500px;
  align-items: center;

  .gold-text, a {
    color: #d0a72d;
    font-weight: bold;
  }
`

const InnerContainer = styled(Col)`
  background: white;
  padding: 30px 40px;
  text-align: center;

  &:before {
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    background: transparent;
    content: ' ';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 0;
    border: 2px solid #CCC;
  }

  h1 {
    font-family: Landscape Land;
    font-size: 46px;
    color: #d0a72d;
    margin: 0;

    span {
      letter-spacing: -7px;
    }
  }

  p {
    font-family: Montserrat;
    color: #888;
    line-height: 22px;
    font-size: 14px;

    span {
      font-weight: bold;
      color: #777;
      font-size: 16px;
    }
  }

  @media (max-width: 576px) {
    margin-top: 30px;
  }
`

export { InnerContainer, Section }
