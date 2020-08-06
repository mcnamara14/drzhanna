import React, { useEffect, useState } from 'react'
import Img from 'gatsby-image'
import { CloseCircleFilled } from '@ant-design/icons';
import { Col, Row } from 'antd'
import watchTheShowImg from '../../../images/watch-the-show-img.jpg'
import YouTube from 'react-youtube'

import { Container, Copy, Image } from './styles'

const WatchTheShow = ({ heroImage, text }) => {
    const [videoOpen, toggleVideoOpen] = useState(false)
    const [element, setElement] = useState(null)

    const opts = {
        height: '100%',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            controls: 1, 
        }
    }

    useEffect(
        () => {
            if (element) {
                console.log('element')
            }
        },
        [videoOpen]
    )

    const onReady = event => {
        setElement(event)
    }

    const handleCloseClick = () => {
        console.log('hit')
        console.log('video', videoOpen)
        toggleVideoOpen(false)
    }

    return (
        <Container>
            {videoOpen && <CloseCircleFilled onClick={() => handleCloseClick()} className="house-calls--what-the-show--close-icon"/>}
            <div className="house-calls--what-the-show--title">
                <h1>What the Show</h1>
                <hr />
            </div>

            <Row gutter={120}>
                <Copy xs={24} sm={12}>
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
                    xs={24}
                    sm={12}
                    backgroundImage={watchTheShowImg}
                    onClick={() => toggleVideoOpen(true)}
                >
                    {videoOpen &&
                    <>
                        <YouTube
                            videoId="xABe5_PIPCQ"
                            opts={opts}
                            onReady={onReady}
                            className="house-calls--what-the-show--video"
                            containerClassName="house-calls--what-the-show--video-container"
                        ></YouTube>
                    </>};
                </Image>
            </Row>
        </Container>
    )
}

export default WatchTheShow
