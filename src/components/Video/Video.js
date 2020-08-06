import React, { useEffect, useState } from 'react'
import { CloseCircleFilled } from '@ant-design/icons'
import YouTube from 'react-youtube'

import { Container } from './styles'

const Video = ({ handleCloseClick, videoId }) => {
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
            controls: 1
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

    return (
        <Container>
            <CloseCircleFilled
                onClick={() => handleCloseClick()}
                className="house-calls--what-the-show--close-icon"
            />
            <YouTube
                videoId={videoId}
                opts={opts}
                onReady={onReady}
                className="house-calls--what-the-show--video"
                containerClassName="house-calls--what-the-show--video-container"
            />
        </Container>
    )
}

export default Video
