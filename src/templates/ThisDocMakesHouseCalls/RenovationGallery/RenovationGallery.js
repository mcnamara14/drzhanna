import React, { useEffect, useState } from 'react'
import Img from 'gatsby-image'
import { Col, Row } from 'antd'
import RichText from '../../../components/RichText/RichText'
import slideshowImage from '../../../images/watch-the-show-img.jpg'
import Slider from 'react-slick'

import {
    InnerContainer,
    Container,
    FeaturedImage,
    Image,
    ThumbContainer,
    ThumbRow
} from './styles'
import renovationGalleryData from './renovationGalleryData'

const RenovationGallery = ({ heroImage, text }) => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const [selectedGallery, setSelectedGallery] = useState('gallery1')
    const slideshowGallery = renovationGalleryData.find(
        gallery => gallery.name === selectedGallery
    ).images

    const settings = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        fade: true,
        className: 'slideshow'
    }

    const updateSelectedGallery = gallery => {
        setSelectedGallery(gallery)
    }

    return isClient
        ? <Container justify="center">
              <Col
                  xs={24}
                  lg={22}
                  xxl={18}
                  className="renovation-gallery--innercontainer"
              >
                  <h3>Renovation Gallery</h3>
                  <InnerContainer style={{ paddingRight: 40 }} type="flex" justify="center">
                      <Col xs={22} md={12} className="renovation-gallery--featured-slideshow">
                          <div className="slideshow-container">
                              <Slider {...settings}>
                                  {slideshowGallery.map(image => {
                                      return (
                                          <div>
                                              <FeaturedImage
                                                  backgroundImage={image}
                                              />
                                          </div>
                                      )
                                  })}
                              </Slider>
                          </div>
                      </Col>
                      <ThumbContainer xs={24} md={12}>
                          <ThumbRow gutter={40}>
                              {renovationGalleryData.map(gallery => {
                                  return (
                                      <Col
                                          xs={12}
                                          md={12}
                                          style={{
                                              marginBottom: 40,
                                              height: 'calc(50% - 20px)'
                                          }}
                                          className="renovation-gallery--thumb"
                                      >
                                          <button
                                              onClick={() =>
                                                  updateSelectedGallery(
                                                      gallery.name
                                                  )}
                                          >
                                              View Home
                                          </button>
                                          <Image
                                              backgroundImage={
                                                  gallery.images[1]
                                              }
                                          />
                                      </Col>
                                  )
                              })}
                          </ThumbRow>
                      </ThumbContainer>
                  </InnerContainer>
              </Col>
          </Container>
        : null
}

export default RenovationGallery
