import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'
import Navigation from './navigation'
import Header from './Header/Header'
import Footer from './Footer/Footer';
import 'antd/dist/antd.css';
import { Helmet } from 'react-helmet'

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
                <Helmet title={'Dr Zhanna'} />
                <Header path={path} />
                {children}
                <Footer />
            </Container>
        )
    }
}

export default Template
