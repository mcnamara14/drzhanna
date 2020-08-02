import styled from 'styled-components'
import { Row } from 'antd'

const Container = styled.div`
  padding: 40px;
  background-color: #fcfaf6;

  h3 {
    font-family: Landscape Land;
    font-size: 38px;
    color: #4e4e4e;
    margin-bottom: 5px;
  }

  h4 {
    font-family: Montserrat;
    font-size: 18px;
    text-transform: uppercase;
    color: #73746d;
    line-height: 100%;
    margin-bottom: 20px;
  }

  p {
    color: #73746d;
    font-size: 12px;
    line-height: 24px;
  }
`

const StyledRow = styled(Row)`

`

export { Container, StyledRow }