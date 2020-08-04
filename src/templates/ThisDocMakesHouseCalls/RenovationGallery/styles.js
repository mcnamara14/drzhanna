import styled from 'styled-components'
import { Col, Row } from 'antd'

const Container = styled(Row)`
    width: 100%;
    height: 100%;
    margin: 60px 0;

    h3 {
        font-family: Playfair Display;
        font-size: 30px;
        color: #4e4e4e;
    }

    .renovation-gallery--innercontainer {
        padding-left: 40px;
    }

    .slideshow-container {
        .slick-slide {
            left: 0 !important;
            position: absolute !important; 
            height: 100%;

            div {
                height: 100%;
            }

            img {
                height: 100%;
            }
        }

        .slick-dots {
            display: block;
            position: absolute;
            bottom: 20px;
        }
    }
`

const ThumbContainer = styled(Col)`
    height: 100%;
`
const ThumbRow = styled(Row)`
    width: 100%;
    height: 100%;
`

const InnerContainer = styled(Row)`
    height: 500px;
`

const Image = styled.div`
    background-image: ${({ backgroundImage }) =>`url(${backgroundImage})`};
    background-size: cover;
    height: 100%;
    width: 100%;
`



export { Image, Container, InnerContainer, ThumbContainer, ThumbRow }
