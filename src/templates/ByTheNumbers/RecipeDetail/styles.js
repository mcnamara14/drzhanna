import styled from 'styled-components'
import { Row } from 'antd'

const Section = styled(Row)`
  h1 {
    font-family: Landscape Land;
    font-size: 46px;
    color: #d0a72d;
    margin: 0;
    line-height: 36px;
  }

  h2 {
    font-family: Playfair Display; 
    margin-top: 10px; 
  }

  ul {
    list-style: none;
    margin-bottom: 30px;

    li {
      font-family: Montserrat;
      line-height: 30px;
      
      span {
        margin-left: 10px;
      }

      &:before {
        content: '― ';
        color: #d0a72d;
        font-weight: bold;
        display: inline-block; 
        width: 1em;
        margin-left: -1em;
      }
    }
  }

  .recipe-detail--step {
    font-family: Montserrat;
    margin-bottom: 15px;

    b, p {
      display: block;
      margin-bottom: 3px;
    }
  }

  .recipe-detail--mobile-image {
    display: none;

    @media (max-width: 576px) {
      margin: 20px 0;
      display: block;
    }
  }
`

export { Section }
