import styled from 'styled-components'
import { Row } from 'antd'

const Container = styled.div`
  padding: 20px 40px;
  border: 2px solid #CCC;
  position: relative;

  .gatsby-image-wrapper {
    border: 2px solid #f5f5f5;
  }

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
    border: 1px solid #CCC;
  }

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
    margin-bottom: 17px;
    font-weight: 500;
  }

  p {
    font-family: Montserrat;
    color: #888;
    line-height: 22px;
    font-size: 14px;
    margin-bottom: 20px;
  }

  img {
    @media (max-width: 576px) {
      padding-bottom: 40px;
    }
  }
`

const StyledRow = styled(Row)`

`

export { Container, StyledRow }