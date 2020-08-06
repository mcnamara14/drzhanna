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
        font-size: 32px;
        font-weight: 700;
        color: #4e4e4e;
        max-width: max-content;
    }

    .house-calls--what-the-show--close-icon {
        position: fixed;
        z-index: 2147483647;
        color: white;
        top: 30px;
        right: 40px;
        font-size: 34px;
    }
`

const Copy = styled(Col)`
    color: #73746d;
    font-family: Montserrat;

    h2 {
        font-family: Playfair Display;
        font-size: 28px;
        line-height: 100%;
        font-weight: 700;
        color: #4e4e4e; 
        margin-bottom: 30px;
    }

    .house-calls--what-the-show--headline {
        margin: 0;
        font-size: 12px;
    }
`

const Image = styled(Col)`
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    height: 400px;
    width: 100%;
    background-size: cover;
    background-position: bottom;

    &:hover {
        cursor: pointer;
    }

    .house-calls--what-the-show--video-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 2147483646;
        background: #222;
    }

    .house-calls--what-the-show--video {
        width: 80vw;
        height: 45vw;
        margin: auto;
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
`

export { Container, Copy, Image }
