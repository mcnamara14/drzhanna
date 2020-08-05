import styled from 'styled-components'
import { Col, Row } from 'antd'

const Container = styled(Row)`
    margin: 70px 0 30px 0;
    background: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-position: center;
    background-size: cover;
    height: 350px;
`

const InnerContainer = styled(Col)`
    padding: 80px;
    background: white;
    text-align: center;
    margin-top: 100px;

    h3 {
        font-family: Playfair Display;
        color: #d0a72d;
        font-weight: 500;
        letter-spacing: -1px;
        font-size: 34px;
        margin-bottom: 20px;
        line-height: 40px;
    }

    button {
        margin-top: 35px;
    }
` 


export { Container, InnerContainer}
