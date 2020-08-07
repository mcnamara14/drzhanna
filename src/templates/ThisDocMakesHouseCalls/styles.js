import styled from 'styled-components'
import { Row } from 'antd'

const Section = styled(Row)`
  margin: 80px 0 60px 0;

  .house-calls--overview {
    margin-bottom: 80px;

    p {
      font-family: Montserrat;
      text-align: center;
      color: #737373;
    }
  }

  @media (max-width: 992px) {
    margin: 0 0 60px 0;
  }
`

export { Section }