import styled from 'styled-components'
import { Row } from 'antd'

const Section = styled(Row)`
  margin: 60px 0;


  .gold-text, a {
    color: #d0a72d;
    font-weight: bold;
  }

  .ant-row {
    width: 100%
  }

  h2 {
    font-family: Landscape Land;
    font-size: 50px;
    color: #4e4e4e;
    margin-bottom: 5px;
    width: 100%;
    line-height: 40px;
  }

  @media (max-width: 576px) {
    .recipes--thumbnails {
      display: flex;
      justify-content: center;
      margin: 0 !important;
    }
  }
`

export { Section }