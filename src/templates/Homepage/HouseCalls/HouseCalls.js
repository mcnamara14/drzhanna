import React, { useState } from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { Col, Row } from 'antd'
import RichText from '../../../components/RichText/RichText'
import SplitPlayButton from '../../../components/SplitButton/SplitPlayButton'
import Video from '../../../components/Video/Video'

import { Copy, Container, Image, MobileImage } from './styles'

const HouseCalls = ({ title, image, text }) => {
    const [videoOpen, toggleVideoOpen] = useState(false)

    const handleCloseClick = () => {
        toggleVideoOpen(false)
    }

    return (
        <Container>
            {videoOpen &&
                <Video
                    videoId="xABe5_PIPCQ"
                    handleCloseClick={handleCloseClick}
                />}
            <Row gutter={100} type="flex" justify="center">
                <Image
                    xs={24}
                    md={11}
                    backgroundImage={image}
                    onClick={() => toggleVideoOpen(true)}
                >
                </Image>
                <Copy xs={24} md={10}>
                    <h1>This Doc Makes House Calls</h1>
                    <MobileImage
                        src={image}
                        // onClick={() => navigate('/this-doc-makes-house-calls')}
                    >
                    </MobileImage>
                    <RichText content={text.json} />
                    <button>
                        <Link to="/this-doc-makes-house-calls">
                            LEARN ABOUT THE SHOW
                        </Link>
                    </button>
                </Copy>
            </Row>
        </Container>
    )
}

export default HouseCalls
