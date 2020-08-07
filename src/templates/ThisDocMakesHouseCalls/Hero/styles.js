import styled from 'styled-components'
import { Col } from 'antd'

const Container = styled.div`
    height: 500px;
    width: 100%;
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    background-position: bottom;
    position: relative;

    @media (max-width: 768px) {
        height: auto;
    }
`

const Image = styled.div`
    position: absolute;
    width: 70%;
    top: -20px;
    right: -57%;

    @media (max-width: 1200px) {
        right: -53%;
    }

    @media (max-width: 992px) {
        display: none;
    }
`

const Copy = styled(Col)`
    width: auto;
    padding: 80px 200px 80px 40px !important;
    background: #f7f6f3;
    margin: 0 150px;
    border-left: 4px solid #d0a72d;
    font-family: Montserrat;
    line-height: 24px;
    font-size: 14px;

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
    }

    @media (min-width: 1600px) {
        margin: 0 300px;
    }

    @media (max-width: 1200px) {
        padding: 80px 40px 80px 40px !important;
    }

    @media (max-width: 996px) {
        margin: 0 100px;
    }
`

export { Copy, Container, Image }
