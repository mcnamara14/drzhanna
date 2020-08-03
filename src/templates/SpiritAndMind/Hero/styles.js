import styled from 'styled-components'

const Container = styled.div`
    height: 500px;
    width: 100%;
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    background-position: bottom;

    .spirit-and-mind--hero-copy {
        width: 600px;
        padding: 40px;
        background: #f7f6f3;
        margin-left: 100px;
        top: -30px;
        position: relative;

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
