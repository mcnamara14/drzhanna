import styled from 'styled-components'
import { Col } from 'antd'

const Container = styled(Col)`
  margin: 0 0 30px 0;

  &:hover {
    box-shadow: rgba(11, 26, 33, 0.08) 0px 3px 10px;

    @media (max-width: 576px) {
      box-shadow: none;
    }
  }

  .recipe--image {
    height: 200px;
    width: 100%;
    margin-top: 20px;
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    position: relative;
    border: 2px solid #f5f5f5;
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

        @media (max-width: 576px) {
          margin-bottom: 30px;
        }
      }

      .recipe-link {
        font-family: Montserrat;
        color: #666;
        font-weight: 400;
        font-size: 12px;
      }

      @media (max-width: 576px) {
        height: 110px;
        padding-bottom: 20px;
      }
  }

      @media (max-width: 576px) {
        padding: 20px 0 !important;
        margin: 0 !important;
      }
`

export { Container }
