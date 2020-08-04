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
        margin-right: 40px;

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
            display: flex !important;
            position: absolute;
            bottom: 20px;
            left: 30px;
            padding: 0;
            justify-content: space-between;
            width: 60px;

            li {
                position: relative;
                width: 100px;
                height: 60px;

            }

            li.slick-active::before {
                color: #d0a72d;
            }

            li::before {
                content: "•";
                color: white;
                font-size: 60px;
                margin:0 6px;
            }

            li::marker {
                color: transparent;
            }

            button {
                position: absolute;
                left: 0;
                bottom: 0;
                opacity: 0;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
`

const ThumbContainer = styled(Col)`
    height: 100%;
`
const ThumbRow = styled(Row)`
    width: 100%;
    height: 100%;

    button {
        position: absolute;
        bottom: 10px;
        right: 30px;
    }
`

const InnerContainer = styled(Row)`
    height: 500px;
`

const Image = styled.div`
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    height: 100%;
    width: 100%;
`

export { Image, Container, InnerContainer, ThumbContainer, ThumbRow }
