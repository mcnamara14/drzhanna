import styled from 'styled-components'

const Container = styled.div`
    .house-calls--what-the-show--close-icon {
        position: fixed;
        z-index: 2147483647;
        color: white;
        top: 30px;
        right: 40px;
        font-size: 34px;
    }

    .house-calls--what-the-show--video-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 2147483646;
        background: #222;

        animation: fadeIn ease 5s;
        -webkit-animation: fadeIn ease 5s;
        -moz-animation: fadeIn ease 5s;
        -o-animation: fadeIn ease 5s;
        -ms-animation: fadeIn ease 5s;
        }
        @keyframes fadeIn {
        0% {background: transparent;}
        100% {background: #222;}
        }

        @-moz-keyframes fadeIn {
        0% {background: transparent;}
        100% {background: #222;}
        }

        @-webkit-keyframes fadeIn {
        0% {background: transparent;}
        100% {background: #222;}
        }

        @-o-keyframes fadeIn {
        0% {background: transparent;}
        100% {background: #222;}
        }

        @-ms-keyframes fadeIn {
        0% {background: transparent;}
        100% {background: #222;}
        }
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

export { Container }
