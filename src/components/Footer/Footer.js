import React from 'react'
import { P, H1 } from '../typography/typography'
import { Link } from 'gatsby'
import useWindowSize from '../../hooks/useWindowSize';

import { Container, Navigation } from './styles'

const Footer = () => {
    let isMobile
    const windowSize = useWindowSize()
    if (windowSize.width < 568) {
        isMobile = true
    } else {
        isMobile = false
    }

    return (
        <Container>
            {isMobile
                ? <><P fontSize="12px">
                      @COPYRIGHT DRZHANNA.COM 2020</P>
                      <P>ZHANNA@DRZHANNA.COM</P>
                      <P>555-555-5555</P>
                  </>
                : <P fontSize="12px">
                      @COPYRIGHT DRZHANNA.COM 2020{' '}
                      <span className="gold-text">|</span> DZHANNA@DRZHANNA.COM{' '}
                      <span className="gold-text">|</span> 858-633-7944
                  </P>}
        </Container>
    )
}

export default Footer
