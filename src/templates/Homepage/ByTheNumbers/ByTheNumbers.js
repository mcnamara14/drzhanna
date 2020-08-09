import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Col, Row } from 'antd'
import RichText from '../../../components/RichText/RichText'
import Button from '../../../components/Button/Button'
import foodImage from '../../../images/homepage-food-img.jpg'

import { Container, Copy, Image } from './styles'

const ByTheNumbers = ({ title, image, text }) => {
    return (
        <Row type="flex" justify="center">
            <Col xs={22} sm={18} xxl={18}>
                <Container>
                    <Copy xs={24} md={14}>
                        <h3><span>By</span> The Numbers</h3>
                        <p className="by-the-numbers--subtitle">Under $5 to buy; Under 15 minutes to make; and Under 300 cal. to eat; Recipe for Success!</p>
                        <p className="by-the-numbers--description">This long overdue recipe book is a product of life long passion to make good food easy, fast, and low cal. Everything in this book is designed to help you lose the weight and keep it off, hopefully for the rest of your life.The secret to successful long-term weight loss is feeling satiated and enjoying the food you eat. Without those two elements in your weight loss program no matter what you do, you will not be able to sustain it over time. Weight loss program should not be about dieting, it should be about a healthy relationship with food.</p>
                        <Link to="/by-the-numbers"><Button title="VIEW RECIPES" /></Link>
                    </Copy>
                    <Image xs={22} md={10} backgroundImage={foodImage}/>
                </Container>
            </Col>
        </Row>
    )
}

export default ByTheNumbers
