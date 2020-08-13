import styled from 'styled-components'
import { Row } from 'antd'

const Section = styled(Row)`
  padding: 200px 20px;
  text-align: center;
  
  img {
    width: 300px;
    margin: 0 auto 20px auto;
  }

  h2 {
    font-family: Montserrat;
    line-height: 28px;
    font-size: 24px;
    color: #999;
  }
`

export { Section }