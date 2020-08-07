import React, { useEffect, useState } from 'react'
import Img from 'gatsby-image'
import { Col, Row } from 'antd'
import watchTheShowImg from '../../../images/watch-the-show-img.jpg'
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
                <h1>What the Show</h1>
                <hr />
            </div>

            <Row gutter={120} type="flex" justify="center">
                <Copy xs={22} md={12}>
                    <p className="house-calls--what-the-show--headline">
                        FOLLOW OUR SERIES
                    </p>
                    <h2>TEASER VIDEO</h2>
                    <div className="house-calls--whatch-the-show--body">
                        <p>
                            Lorem ipsum dolor sit amet, con sectetur adipiscing
                            elit. Quisque vel ls a nunc pharetra laoreet. Phllus
                            sed turpis fringilla, sodales elit et, posuererem.
                            Aliquam a posuere ipsum. Suspendisse.
                        </p>
                        <p>
                            Aliquam a posuere ipsum. Suspendisse fermentum augue
                            nec.
                        </p>
                        <p>
                            Phllus sed turpis fringilla, sodales elit et,
                            posuererem. Aliquam a posuere ipsum. Suspendisse
                        </p>
                    </div>
                </Copy>
                <Image
                    xs={18}
                    md={12}
                    backgroundImage={watchTheShowImg}
                    onClick={() => toggleVideoOpen(true)}
                />
            </Row>
        </Container>
    )
}

export default WatchTheShow
