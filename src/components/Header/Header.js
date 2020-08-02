import React from 'react'
import { P, H1 } from '../typography/typography'
import { Link } from 'gatsby'

import { Container, Navigation } from './styles'

const Header = () => {
    return (
        <Container>
            <H1 style={{ margin: 0 }} fontSize="36px">Dr Zhanna</H1>
            <Navigation>
                <ul>
                    <li><Link to="/"><P fontSize="12px">HOME</P></Link></li>
                    <li><P fontSize="12px">THIS DOC MAKES HOUSECALLS</P></li>
                    <li><P fontSize="12px">SPIRIT AND MIND</P></li>
                    <li><P fontSize="12px">BY THE NUMBERS</P></li>
                    <li><Link to="/contact"><P fontSize="12px">CONTACT</P></Link></li>
                </ul>
            </Navigation>
        </Container>
    )
}

export default Header
