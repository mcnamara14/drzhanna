import React from 'react'
import { P, H1 } from '../typography/typography'
import { Link } from 'gatsby'

import { Container, Navigation } from './styles'

const Footer = () => {
    return (
        <Container>
            <P fontSize="12px">@COPYRIGHT DRZHANNA.COM 2020   <span className="gold-text">|</span>    ZHANNA@DRZHANNA.COM   <span className="gold-text">|</span>     555-555-5555</P>
        </Container>
    )
}

export default Footer
