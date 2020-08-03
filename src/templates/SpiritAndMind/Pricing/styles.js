import styled from 'styled-components'
import { Col, Row } from 'antd'

const Container = styled(Row)`
    font-family: Montserrat;
    display: flex;
    justify-content: center;
    margin: 30px 0;

    h3 {
        color: #737373;
        font-size: 16px;
    }

    .spirit-and-mind--pricing-services-title {
        font-family: Quicksand;
        font-size: 24px;
        display: flex;
        justify-content: center;
        padding-right: 15px;

        @media (min-width: 576px) {
            writing-mode: sideways-lr;
        }

        @media (max-width: 576px) {
            display: block;
            width: 100%;
            margin-bottom: 20px;
        }
    }

    .spirit-and-mind--pricing-services {
        background: #fdfbf7;
        border-left: 2px solid #d0a72d;
        padding: 100px 50px 100px 60px;
        display: flex;
        align-items: center;

        ul {
            padding-left: 15px;
        }

        li {
            margin-bottom: 7px;
        }

        @media (max-width: 576px) {
            display: block;
            width: 100%;
        }
    }
`

const Services = styled(Col)`
    display: flex;

    @media (max-width: 576px) {
        display: block;
        width: 100%;
    }
`

const PricingTable = styled(Col)`
    padding: 60px 0 80px 0;

    span {
        color: #d0a72d;
    }

    h3 {
        margin-top: 20px;
    }

    p {
        margin-bottom: 3px;
    }

    @media (max-width: 576px) {
        padding: 30px 0 0 0;
        text-align: center;
    }
`

export { Container, PricingTable, Services }
