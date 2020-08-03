import styled from 'styled-components'
import { Col, Row } from 'antd'

const Container = styled(Row)`
    margin-bottom: 60px;

    .spirit-and-mind--bio {
        text-align: center;
        display: flex;
        align-items: center;

        h2 {
            font-family: Quicksand;
            font-weight: 500;
            letter-spacing: -2px;
            font-size: 40px;
            line-height: 46px;
        }

        p {
            font-family: Montserrat;
            line-height: 26px;
        }

        .spirit-and-mind--bio-link {
            font-family: Quicksand;
            font-size: 22px;
            margin-top: 40px;

            a {
                color: #d0a72d;
            }
        }
    }
`

const Image = styled(Col)`
    margin: 0 auto;

    @media (max-width: 576px) {
        margin-bottom: 40px;
    }
`

export { Container, Image }
