import React, { useState } from 'react'
import Img from 'gatsby-image'
import { Col, Row } from 'antd'
import RichText from '../../../components/RichText/RichText'
import poolBefore from '../../../images/sample-gallery/pool-before.jpg'
import poolAfter from '../../../images/sample-gallery/pool-after.jpg'
import slideshowImage from '../../../images/watch-the-show-img.jpg'
import Slider from "react-slick";

import { InnerContainer, Container, FeaturedImage,  Image, ThumbContainer, ThumbRow } from './styles'
import renovationGalleryData from './renovationGalleryData';

const RenovationGallery = ({ heroImage, text }) => {
    const [selectedGallery, setSelectedGallery] = useState('gallery1')
    const slideshowGallery = renovationGalleryData.find(gallery => gallery.name === selectedGallery).images
    const galleryThumbnails = renovationGalleryData.filter(gallery => gallery.name !== selectedGallery)
  
    const settings = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        fade: true,
        className: "slideshow",
      };

    const updateSelectedGallery = (gallery) => {
        setSelectedGallery(gallery)
    }

    return (
        <>
        <Container justify="center">
            <Col xs={24} lg={22} xxl={18} className="renovation-gallery--innercontainer">
                <h3>Renovation Gallery</h3>
                <InnerContainer style={{ paddingRight: 40 }}>
                    <Col xs={24} md={12}>
                        <div className="slideshow-container">
                            <Slider {...settings}>
                                {slideshowGallery.map(image => {
                                    return (
                                        <div>
                                            <FeaturedImage backgroundImage={image} />
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                    </Col>
                    <ThumbContainer xs={24} md={12}>
                        <ThumbRow gutter={40}>
                            {galleryThumbnails.map(gallery => {
                                return (
                                    <Col xs={12} md={12} style={{ marginBottom: 40, height: 'calc(50% - 20px)'}} className="renovation-gallery--thumb">
                                        <button onClick={() => updateSelectedGallery(gallery.name)}>View Home</button>
                                        <Image backgroundImage={gallery.images[0]} />
                                    </Col>
                                )
                            })}
                        </ThumbRow>
                    </ThumbContainer>
                </InnerContainer>
            </Col>
        </Container>
        </>
    )
}

export default RenovationGallery
