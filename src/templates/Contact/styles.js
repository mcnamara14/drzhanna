import styled from 'styled-components'
import { Row } from 'antd'

const Section = styled(Row)`
  margin: 60px 0;

  .gold-text, a {
    color: #d0a72d;
    font-weight: bold;
  }

  img {
      height: 32px;
      width: 32px;
      display: inline-block;
      margin-left: 10px;
  }

  @media (max-width: 768px) {
    margin: 0;
  }
`

export { Section }