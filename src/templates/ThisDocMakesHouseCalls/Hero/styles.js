import styled from 'styled-components'
import { Col } from 'antd'

const Container = styled.div`
    @media (max-width: 768px) {
        height: auto;
    }
`

const Image = styled.div`
    position: absolute;
    width: 43%;
    top: -20px;
    right: 20px;

    &:before {
        content: '';
        background: #f7f6f3;
        height: 50%;
        width: 75%;
        position: absolute;
        top: -20px;
        right: -20px;
    }

    &:after {
        content: '';
        background: transparent;
        height: 40%;
        width: 40%;
        position: absolute;
        bottom: -20px;
        right: -20px;
        z-index: -1;
        border-bottom: 1px solid #999;
        border-right: 1px solid #999;
    }

    @media (max-width: 768px) {
        display: none;
    }

    @media (min-width: 1600px) {
        position: absolute;
        width: 35%;
        top: -20px;
        right: 155px;
    }
`

const Copy = styled(Col)`
    h1 {
        font-family: Playfair Display;
        color: #d0a72d;
        font-weight: 300;
        letter-spacing: -1px;
        font-size: 34px;
        margin-bottom: 0;

        @media (max-width: 1200px) {
            line-height: 38px;
        }
    }

    .this-doc-makes-house-calls--subhead {
        color: #9a9a9a;
        line-height: 40px;

        @media (max-width: 576px) {
            line-height: 19px;
            margin-top: 10px;
        }
    }

    @media (min-width: 1600px) {
        margin: 0 300px;
    }

    @media (max-width: 1200px) {
        padding: 0 40px 0 40px !important;
    }

    @media (max-width: 996px) {
        margin: 30px 100px 0 100px;
    }
`

const InnerContainer = styled.div`
    width: 67%;
    padding: 80px 200px 80px 40px !important;
    background: #f7f6f3;
    border-left: 4px solid #d0a72d;
    font-family: Montserrat;
    line-height: 24px;
    font-size: 14px;

    @media (max-width: 768px) {
        width: 100%;
        padding: 40px !important;
    }
`


export { Copy, Container, InnerContainer, Image }
