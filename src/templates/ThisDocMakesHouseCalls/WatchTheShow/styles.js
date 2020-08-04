import styled from 'styled-components'
import { Col } from 'antd'

const Container = styled.div`
    .house-calls--what-the-show--title {
        margin: 40px auto 60px auto;
        max-width: max-content;

        hr {
            color: #d0a72d;
            width: 75%;
        }
    }

    h1 {
        font-family: Playfair Display;
        text-align: center;
        font-size: 40px;
        font-weight: 700;
        color: #4e4e4e;
        max-width: max-content;
    }
`

const Copy = styled(Col)`
    color: #73746d;
    font-family: Montserrat;

    h2 {
        font-family: Playfair Display;
        font-size: 32px;
        line-height: 100%;
        font-weight: 700;
        color: #4e4e4e; 
        margin-bottom: 30px;
    }

    .house-calls--what-the-show--headline {
        margin: 0;
    }
`

export { Container, Copy }
