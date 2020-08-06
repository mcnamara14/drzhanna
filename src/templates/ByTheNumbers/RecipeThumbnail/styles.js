import styled from 'styled-components'
import { Col } from 'antd'

const Container = styled(Col)`
  margin: 10px 0 30px 0;

  .recipe--image {
    height: 200px;
    width: 100%;
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
  }

  h2 {
    font-family: Landscape Land;
    font-size: 50px;
    color: #4e4e4e;
    margin-bottom: 5px;
    width: 100%;
  }

  .recipe--copy {
    height: 155px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

      a {
        color: #4e4e4e;
        font-weight: normal;
        font-size: 12px;
        position: absolute;
        bottom: 0;
      }

      h5 {
        font-family: Playfair Display;
        color: #d0a72d;
        font-size: 24px;
        line-height: 28px;
        margin-top: 20px;
      }

      .recipe-link {
        font-family: Montserrat;
        color: #3b3c36;
        font-weight: 400;
        font-size: 12px;
      }
  }
`

export { Container }
