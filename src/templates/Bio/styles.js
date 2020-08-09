import styled from 'styled-components'
import { Row } from 'antd'

const Section = styled(Row)`
  margin: 60px 0;
  
  h1 {
    font-family: Landscape Land;
    font-size: 54px;
    line-height: 100%;
    margin-bottom: 5px;
  }

  p {
    font-family: Montserrat;
    line-height: 28px;
  }

  b {
    font-size: 18px;
  }

  .signature {
    width: 250px;
    margin-top: 20px;
  }

  .bio--by-the-numbers {
    font-family: Landscape Land;
    font-weight: 700;
    font-size: 24px;
  }

  .bio--subtitle {
    font-family: Montserrat;
    font-weight: 700;
    color: #888;  
  }

  .bio--quote {
    font-size: 22px;
  }

  .bio--letter-spacing {
    letter-spacing: -3px;
  }

  @media (max-width: 576px) {
    img {
      padding-bottom: 30px;
    }
  }
`

export { Section }