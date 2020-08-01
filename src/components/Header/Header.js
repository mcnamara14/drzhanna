import React from 'react'
import { P, H1 } from '../typography/typography'
import { Link } from 'gatsby'

import { Container, Navigation } from './styles'

const Header = () => {
    return (
        <Container>
            <H1 style={{ margin: 0 }}>Dr Zhanna</H1>
            <Navigation>
                <ul>
                    <li><Link to="/"><P>HOME</P></Link></li>
                    <li><P>THIS DOC MAKES HOUSECALLS</P></li>
                    <li><P>SPIRIT AND MIND</P></li>
                    <li><P>BY THE NUMBERS</P></li>
                    <li><P>CONTACT</P></li>
                </ul>
            </Navigation>
        </Container>
    )
}

export default Header
