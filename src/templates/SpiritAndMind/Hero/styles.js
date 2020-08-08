import styled from 'styled-components'

const Container = styled.div`
    height: 500px;
    width: 100%;
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    background-position: bottom;
    position: relative;

    .spirit-and-mind--hero-copy {
        width: 600px;
        background: #f7f6f3;
        margin-left: 10vw;
        top: -30px;
        position: relative;

        span {
            height: 100%;
            width: 100% !important;
            display: block;
            padding: 40px;
            z-index: 2;
            background: #f7f6f3;
            position: relative;
        }

        &:before {
            content: '';
            background: #e5e3dc;
            height: 50%;
            width: 50%;
            position: absolute;
            bottom: -15px;
            left: -15px;
            z-index: 1;
        }

        h1 {
            font-family: Quicksand;
            color: #d0a72d;
            font-weight: 300;
            letter-spacing: -1px;
            font-size: 34px;
        }

        p {
            font-family: Montserrat;
            line-height: 30px;
        }

        @media (min-width: 1600px) {
            margin-left: 16vw;
        }

        @media (max-width: 768px) {
            width: auto;
            margin: 0 50px;
        }

        @media (max-width: 576px) {
            width: auto;
            margin: 0 10px;
            padding: 20px 40px;

            p {
                line-height: 24px;
                font-size: 13px;
            }
        }
    }
`

export { Container }
