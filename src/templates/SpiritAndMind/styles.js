import styled from 'styled-components'
import { Row } from 'antd'

const Section = styled(Row)`
  margin-top: 60px;

  .gold-text, a {
    color: #d0a72d;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`

export { Section }