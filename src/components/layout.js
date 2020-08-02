import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'
import Navigation from './navigation'
import Header from './Header/Header'
import Footer from './Footer/Footer';

class Template extends React.Component {
    render() {
        const { location, children, path } = this.props
        let header

        let rootPath = `/`
        if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
            rootPath = __PATH_PREFIX__ + `/`
        }

        return (
            <Container>
                <Header path={path} />
                {children}
                <Footer />
            </Container>
        )
    }
}

export default Template
