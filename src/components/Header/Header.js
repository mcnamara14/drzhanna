import React from 'react'
import { P, H1 } from '../typography/typography'
import { Link } from 'gatsby'
import MobileMenu from './MobileMenu/MobileMenu'
import useWindowSize from '../../hooks/useWindowSize'
import logo from '../../images/drzhanna-website-logo.jpg'

import { Container, Navigation } from './styles'

const Header = ({ path }) => {
    let isMobile
    const windowSize = useWindowSize()

    if (windowSize.width < 992) {
        isMobile = true
    } else {
        isMobile = false
    }

    return (
        <Container>
            <Link to="/"><img src={logo} /></Link>
            {isMobile
                ? <MobileMenu />
                : <Navigation>
                      <ul>
                          <li>
                              <Link to="/">
                                  <P
                                      fontSize="12px"
                                      fontWeight={path === '/' && 'bold'}
                                  >
                                      HOME
                                  </P>
                              </Link>
                          </li>
                          <li>
                              <Link to="/this-doc-makes-house-calls">
                                  <P
                                      fontSize="12px"
                                      fontWeight={
                                          path ===
                                              '/this-doc-makes-house-calls' &&
                                          'bold'
                                      }
                                  >
                                      THIS DOC MAKES HOUSECALLS
                                  </P>
                              </Link>
                          </li>
                          <li>
                              <Link to="/spirit-and-mind">
                                  <P
                                      fontSize="12px"
                                      fontWeight={
                                          path === '/spirit-and-mind' && 'bold'
                                      }
                                  >
                                      SPIRIT AND MIND
                                  </P>
                              </Link>
                          </li>
                          <li>
                              <Link to="/by-the-numbers">
                                  <P
                                      fontSize="12px"
                                      fontWeight={
                                          path === '/by-the-numbers' && 'bold'
                                      }
                                  >
                                      BY THE NUMBERS
                                  </P>
                              </Link>
                          </li>
                          <li>
                              <Link to="/contact">
                                  <P
                                      fontSize="12px"
                                      fontWeight={path === '/contact' && 'bold'}
                                  >
                                      CONTACT
                                  </P>
                              </Link>
                          </li>
                      </ul>
                  </Navigation>}
        </Container>
    )
}

export default Header
