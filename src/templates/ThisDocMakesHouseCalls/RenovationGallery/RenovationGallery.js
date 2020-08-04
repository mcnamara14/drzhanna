import React from 'react'
import Img from 'gatsby-image'
import { Col, Row } from 'antd'
import RichText from '../../../components/RichText/RichText'
import poolBefore from '../../../images/pool-before.jpg'
import poolAfter from '../../../images/pool-after.jpg'
import slideshowImage from '../../../images/watch-the-show-img.jpg'
import Slider from "react-slick";

import { InnerContainer, Container, Image, ThumbContainer, ThumbRow } from './styles'

const RenovationGallery = ({ heroImage, text }) => {
    const settings = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        fade: true,
        className: "slideshow",
      };

    return (
        <>
        <Container justify="center">
            <Col xs={22} className="renovation-gallery--innercontainer">
                <h3>Renovation Gallery</h3>
                <InnerContainer gutter={40}>
                    <Col xs={24} md={12}>
                        <div className="slideshow-container">
                            <Slider {...settings}>
                                <div>
                                    <img src={poolBefore} />
                                </div>
                                <div>
                                    <img src={poolAfter} />
                                </div>
                            </Slider>
                        </div>
                    </Col>
                    <ThumbContainer xs={12}>
                        <ThumbRow gutter={40}>
                            <Col xs={24} md={12} style={{ marginBottom: 40}}>
                                <Image backgroundImage={slideshowImage} />
                            </Col>
                            <Col xs={24} md={12} style={{ marginBottom: 40}}>
                                <Image backgroundImage={slideshowImage} />
                            </Col>
                            <Col xs={24} md={12}>
                                <Image backgroundImage={slideshowImage} />
                            </Col>
                            <Col xs={24} md={12}>
                                <Image backgroundImage={slideshowImage} />
                            </Col>
                        </ThumbRow>
                    </ThumbContainer>
                </InnerContainer>
            </Col>
        </Container>
        </>
    )
}

export default RenovationGallery
