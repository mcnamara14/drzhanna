import styled from 'styled-components'
import { Row } from 'antd'

const Section = styled(Row)`
  margin: 60px 0;
  
  h1 {
    font-family: Playfair Display;
    font-size: 34px;
    line-height: 100%;
  }

  p {
    font-family: Montserrat;
    line-height: 28px;
  }

  @media (max-width: 576px) {
    img {
      padding-bottom: 30px;
    }
  }
`

export { Section }