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
        line-height: 20px;
        font-size: 13px;
        margin-top: 5px;
        color: #73746d;
    }

    h3 {
        font-family: Landscape Land;
        font-size: 46px;
        color: #d0a72d;
        margin: 0;
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

    @media (max-width: 768px) {
        display: none;
    }
`

export { Copy, Container, Image }
