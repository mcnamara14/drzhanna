import styled from 'styled-components'
import { Col, Row } from 'antd'
import goldSplatterImage from '../../../images/gold-splatter.jpg'

const Container = styled.div`
    height: 500px;
    width: 100%;
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    background-position: bottom;
    position: relative;
`

const Image = styled.div`
    position: absolute;
    width: 48%;
    top: 49px;
    right: -32%;

    &:before {
        content: '';
        background: #e5e3dc;
        height: 50%;
        width: 90%;
        position: absolute;
        top: -20px;
        right: -20px;
    }

    &:after {
        background: url(${goldSplatterImage});
        content: '';
        background-repeat: repeat;
        background-size: auto;
        height: 150%;
        width: 150%;
        position: absolute;
        bottom: -240px;
        right: -120px;
        background-size: contain;
        background-repeat: no-repeat;
        z-index: -1;

        @media (max-width: 1200px) {
            height: 175%;
            width: 175%;
            bottom: -296px;
            right: -94px;
        }
    }

    @media (max-width: 1200px) {
        right: -37%;
    }

    @media (max-width: 768px) {
        display: none;
        right: -37%;
    }
`

const ImageBottom = styled.div`
    position: relative;
    margin: -60px auto 0 auto;
    right: inherit;
    display: none;
    width: 52%;

    @media (max-width: 768px) {
        width: 40%;
        display: block;
        margin: -40px auto 0 auto;
    }

    @media (max-width: 576px) {
        width: 52%;
        display: block;
        margin: -40px auto 0 auto;
    }

    &:after {
        background: url(${goldSplatterImage});
        content: '';
        background-repeat: repeat;
        background-size: auto;
        height: 150%;
        width: 150%;
        position: absolute;
        bottom: -240px;
        right: -120px;
        background-size: contain;
        background-repeat: no-repeat;
        z-index: -1;

        @media (max-width: 768px) {
            right: -100px;
        }
    }
`

const Copy = styled(Col)`
    width: auto;
    padding: 80px 200px 80px 100px !important;
    background: #f7f6f3;
    margin: 0 200px 0 250px;
    font-family: Montserrat;
    line-height: 24px;
    font-size: 14px;

    h1 {
        font-family: Playfair Display;
        color: black;
        font-weight: 300;
        letter-spacing: -1px;
        font-size: 34px;
        margin-bottom: 20px;
        line-height: 40px;

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
        margin: 0 200px 0 300px;
    }

    @media (max-width: 1200px) {
        padding: 80px 150px 80px 40px !important;
        margin: 0 200px 0 200px;
    }

    @media (max-width: 996px) {
        margin: 0 30px;
    }

    @media (max-width: 768px) {
        padding: 40px 40px 80px 40px !important;
        margin: 0;
    }
`

const InnerContainer = styled(Row)`
    @media (max-width: 996px) {
    }

    @media (max-width: 768px) {
        margin: 0 !important;
    }
`

export { Copy, Container, InnerContainer, Image, ImageBottom }
