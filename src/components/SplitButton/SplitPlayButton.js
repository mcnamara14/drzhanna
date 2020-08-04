import React from 'react'
import { CaretRightOutlined } from '@ant-design/icons'

import { Container } from './styles'

const SplitPlayButton = ({ title }) => {
    return (
        <Container>
            <div className="split-play-button--title">PREVIEW EP 1</div>
            <div className="split-play-button--play-icon">
                <CaretRightOutlined />
            </div>
        </Container>
    )
}

export default SplitPlayButton
