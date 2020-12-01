import React from 'react'
import { P } from '../typography/typography'
import useWindowSize from '../../hooks/useWindowSize';
import facebookIcon from '../../images/facebook-icon.png'
import instagramIcon from '../../images/instagram-icon.png'

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
                      <P>DZHANNA@DRZHANNA.COM</P>
                      <P>858-633-7944</P>
                      <P>Follow us on <a href="https://www.facebook.com/Dr-Zhanna-101592835098219" target="_blank"><img src={facebookIcon} /></a><a href="https://www.instagram.com/drzhanna90210/" target="_blank"><img src={instagramIcon} /></a></P>
                  </>
                : <P fontSize="12px">
                      @COPYRIGHT DRZHANNA.COM 2020
                      <span className="gold-text">|</span> DZHANNA@DRZHANNA.COM
                      <span className="gold-text">|</span> 858-633-7944
                      <span className="gold-text">|</span> Follow us on <a href="https://www.facebook.com/Dr-Zhanna-101592835098219" target="_blank"><img src={facebookIcon} /></a><a href="https://www.instagram.com/drzhanna90210/" target="_blank"><img src={instagramIcon} /></a>
                  </P>}
        </Container>
    )
}

export default Footer
