import styled from 'styled-components'
import { Col, Row } from 'antd'

const Container = styled(Row)`
    margin: 0;
    font-family: Montserrat;

    h1 {
        font-family: Quicksand;
        color: #d0a72d;
        font-weight: 300;
        letter-spacing: -1px;
        font-size: 34px;
        line-height: 38px;
    }

    .home-page--spirit-and-mind--headline {
        margin: 0;
        font-size: 12px;
    }

    .home-page--spirit-and-mind--image {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 55%;
        }

        @media (max-width: 996px) {
            justify-content: flex-end;
        
            img {
                width: 75%;
            }
        }

        @media (max-width: 768px) {
            img {
                display: none;
            }
        }
    }

    .home-page--spirit-and-mind--mobile-image {
        display: none;

        @media (max-width: 768px) {
            width: 50% !important;
            margin: 30px auto 50px auto;
            display: block;
        }
    }

    button {
        margin-top: 30px;
    }
`

const InnerContainer = styled(Col)`
    margin: 30px 0;
    background: #fcf9f4;
    padding: 80px 40px;
    text-align: center;
`

const Image = styled(Col)`
    background: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    height: 400px;
    width: 80%;
 
    @media (max-width: 768px) {
        margin: 0 auto 40px auto;
        width: calc(100% - 100px);
    }
`

const Copy = styled(Col)`
    font-family: Montserrat;
    line-height: 24px;
    font-size: 14px;

    h1 {
        font-family: Playfair Display;
        color: #d0a72d;
        font-weight: 500;
        letter-spacing: -1px;
        font-size: 34px;
        margin-bottom: 20px;
        line-height: 40px;

        @media (max-width: 1200px) {
            line-height: 38px;
        }
    }
`

export { Copy, Container, InnerContainer, Image }
