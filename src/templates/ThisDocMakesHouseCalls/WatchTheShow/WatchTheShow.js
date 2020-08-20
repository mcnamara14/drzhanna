import React, { useEffect, useState } from 'react'
import Img from 'gatsby-image'
import { Col, Row } from 'antd'
import watchTheShowImg from '../../../images/this-doc-makes-house-calls-coming-soon.jpg'
import Video from '../../../components/Video/Video';

import { Container, Copy, Image } from './styles'

const WatchTheShow = ({ heroImage, text }) => {
    const [videoOpen, toggleVideoOpen] = useState(false)

    const handleCloseClick = () => {
        toggleVideoOpen(false)
    }

    return (
        <Container>
        {videoOpen && <Video videoId="xABe5_PIPCQ" handleCloseClick={handleCloseClick} />}
            <div className="house-calls--what-the-show--title">
                <h1>Watch the Podcast</h1>
                <hr />
            </div>

            <Row gutter={120} type="flex" justify="center">
                <Copy xs={22} md={12} xxl={10}>
                    <p className="house-calls--what-the-show--headline">
                        FOLLOW OUR SERIES
                    </p>
                    <h2>COMING SOON</h2>
                    <div className="house-calls--whatch-the-show--body">
                    <p>I want my podcast to educate, inform and entertain. I hope that we can answer some of your
questions about the Real Estate profession and expose some important insights that can help
those who engage in any Real Estate transaction avoid being duped or taken advantage of. We
would love to hear from you, the audience. Send us your questions, comments and personal
experiences and we will share them on our future podcasts.</p>
                    </div>
                </Copy>
                <Image
                    xs={14}
                    md={10}
                    xxl={6}
                    backgroundImage={watchTheShowImg}
                    // onClick={() => toggleVideoOpen(true)}
                />
            </Row>
        </Container>
    )
}

export default WatchTheShow
