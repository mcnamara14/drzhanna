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
    font-family: Playfair Display;
    font-size: 24px;
    color: #6c6c6c;
    line-height: 100%;
    margin-bottom: 5px;
    font-weight: 500;
  }

  h5 {
    font-family: Montserrat;
    margin-bottom: 10px;
    color: #73746d;
  }

  .featured-recipe--title {
    margin-top: -23px;

    @media (max-width: 576px) {
      margin-top: 30px;
    }
  }

  .featured-recipe--headline {
    font-family: Landscape Land;
    font-size: 24px;
    letter-spacing: 1px;
    color: #d0a72d;
    margin: 0;
  }

  p {
    font-family: Montserrat;
    color: #888;
    line-height: 22px;
    font-size: 14px;
    margin-bottom: 20px;
  }
`

const StyledRow = styled(Row)`

`

export { Container, StyledRow }