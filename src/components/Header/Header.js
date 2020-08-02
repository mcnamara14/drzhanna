import React from 'react'
import { P, H1 } from '../typography/typography'
import { Link } from 'gatsby'

import { Container, Navigation } from './styles'

const Header = ({ path }) => {

    return (
        <Container>
            <H1 style={{ margin: 0 }} fontSize="36px">Dr Zhanna</H1>
            <Navigation>
                <ul>
                    <li><Link to="/"><P fontSize="12px">HOME</P></Link></li>
                    <li><P fontSize="12px">THIS DOC MAKES HOUSECALLS</P></li>
                    <li><P fontSize="12px">SPIRIT AND MIND</P></li>
                    <li><Link to="/by-the-numbers"><P fontSize="12px" fontWeight={path === "/by-the-numbers" && 'bold'}>BY THE NUMBERS</P></Link></li>
                    <li><Link to="/contact"><P fontSize="12px" fontWeight={path === "/contact" && 'bold'}>CONTACT</P></Link></li>
                </ul>
            </Navigation>
        </Container>
    )
}

export default Header
