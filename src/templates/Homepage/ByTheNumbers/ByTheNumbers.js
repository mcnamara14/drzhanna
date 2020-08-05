import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Col, Row } from 'antd'
import RichText from '../../../components/RichText/RichText'
import InnerWrapper from '../../../components/InnerWrapper/InnerWrapper'
import Button from '../../../components/Button/Button'
import foodImage from '../../../images/homepage-food-img.jpg'

import { Container, Copy, Image } from './styles'

const ByTheNumbers = ({ title, image, text }) => {
    return (
        <InnerWrapper>
            <Container>
                <Copy xs={24} md={14}>
                    <h3>By the Numbers</h3>
                    <p className="by-the-numbers--subtitle">Under $5 to buy; Under 15 minutes to make; and Under 300 cal. to eat; Recipe for Success!</p>
                    <p className="by-the-numbers--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ls a nunc pharetra laoreet. Phllus sed turpis fringilla, sodales elit et, posuererem. Aliquam a posuere ipsum. Suspendisse fermentum augue nec aliquam facilisis.</p>
                    <Link to="/by-the-numbers"><Button title="VIEW RECIPES" /></Link>
                </Copy>
                <Image xs={22} md={10} backgroundImage={foodImage}/>
            </Container>
        </InnerWrapper>
    )
}

export default ByTheNumbers
