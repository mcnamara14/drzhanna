import styled from 'styled-components'
import { Row } from 'antd'

const Section = styled(Row)`
  h1 {
    font-family: Landscape Land;
    font-size: 40px;
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
    margin-bottom: 50px;

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
    font-family: Playfair Display;
    margin-bottom: 15px;

    b, p {
      display: block;
      margin-bottom: 3px;
    }
  }

  .gatsby-image-wrapper {w
    &:before {
      width: calc(100% - 10px);
      height: calc(100% - 10px);
      background: transparent;
      content: ' ';
      position: absolute;
      display: block;
      z-index: 9;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      bottom: 0;
      border: 2px solid white;
    }
  }

  .recipe-detail--mobile-image {
    display: none;

    @media (max-width: 576px) {
      margin: 20px 0;
      display: block;
    }
  }

  .recipe-detail--title {
    padding: 30px 20px;
    background: white;
    margin-top: -30px;
    z-index: 10;
    position: relative;
    text-align: center;
    display: block;
    width: 80%;
    margin: -30px auto 0 auto;  

    hr {
      width: 100px;
      border-top: 0;
      border-bottom: 1px solid #CCC;
      margin: 15px auto 10px auto;
    }

    p {
      font-family: Montserrat;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    span {
      color: #BBB;
    }
  }
  
  .featured-recipe--headline {
    font-family: Landscape Land !important;
    font-size: 24px !important;
    letter-spacing: 1px !important;
    color: #999;
    text-transform: none !important;
    margin: 0;
    line-height: 24px !important;
  }

  h5 {
    font-family: Montserrat;
    margin-bottom: 10px;
    color: #73746d;
  }

  .recipe-detail--ingredients {
    margin-bottom: 50px;

    p {
      font-family: Montserrat;
      line-height: 24px;
      color: rgba(0, 0, 0, 0.65);
    }
  }
`

export { Section }
