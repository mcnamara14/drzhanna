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
  padding: 30px;
  text-align: center;

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

    span {
      font-weight: bold;
    }
  }
`

export { InnerContainer, Section }
