import styled from 'styled-components'
import { Col, Row } from 'antd'

const Container = styled(Row)`
    margin: 160px 0 100px 0;
    align-items: center;
`

const Copy = styled(Col)`
    width: auto;
    padding: 60px 70px 60px 40px !important;
    background: #f7f6f3;
    border-left: 8px solid #d0a72d;
    font-family: Montserrat;
    line-height: 24px;
    font-size: 14px;
    height: max-content;

    .by-the-numbers--subtitle {
        font-weight: bold;
        color: #777;
        font-size: 16px;
        line-height: 20px;
        font-size: 13px;
        margin-top: 5px;
    }

    h3 {
        font-family: Landscape Land;
        font-size: 46px;
        color: #d0a72d;
        margin: 0;

        span {
            letter-spacing: -7px;
            }
    }

    button {
        margin-top: 30px;
    }

    @media (max-width: 768px) {
        padding: 60px 40px !important;
    }
`

const Image = styled(Col)`
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    height: 600px;

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


    @media (max-width: 768px) {
        display: none;
    }
`

export { Copy, Container, Image }
