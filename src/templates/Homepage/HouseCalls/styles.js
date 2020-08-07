import styled from 'styled-components'
import { Col } from 'antd'

const Container = styled.div`
    margin: 70px 0 30px 0;

    &:hover {
        cursor: pointer;
    }

    button {
        font-family: Montserrat;
        font-size: 12px;
        border: 2px solid black;
        background: transparent;
        padding: 8px 12px;
        margin-top: 20px;

        a {
            color: black;
        }
    }

    @media (max-width: 768px) {
        margin: 350px 0 30px 0;

        .ant-row {
            width: 100%;
            margin: 0 !important;
            display: block;
        }
    }
`

const Image = styled(Col)`
    background: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    height: 400px;
    width: 80%;
 
    @media (max-width: 768px) {
        display: none;
    }
`

const MobileImage = styled(Col)`
    background: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    height: 400px;
    width: 80%;
    display: none;
 
    @media (max-width: 768px) {
        display: block;
        margin: 0 auto 40px auto;
        width: 100%;
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

    @media (max-width: 768px) {
        padding: 0 20px !important;
    }
`

export { Copy, Container, MobileImage, Image }
