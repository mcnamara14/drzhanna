import React from 'react'
import { graphql } from 'gatsby'
import { Col, Row } from 'antd'
import { H1, P } from '../../components/typography/typography'
import Layout from '../../components/layout'
import Quote from '../../components/Quote/Quote'
import Hero from './Hero/Hero'
import InnerWrapper from '../../components/InnerWrapper/InnerWrapper'
import FeaturedRecipe from './FeaturedRecipe/FeaturedRecipe'
import Recipes from './Recipes/Recipes'

const ByTheNumbers = ({ data: { contentfulByTheNumbers, allContentfulRecipe } }) => {
    console.log('allContentfulRecipe', allContentfulRecipe)
    return (
        <Layout path="/by-the-numbers">
            <Hero />
            <InnerWrapper>
                <Quote
                    quote="My doctor told me I had to stop throwing intimate dinners for four unless there are three other people."
                    author="Orson Welles"
                />
                <FeaturedRecipe {...contentfulByTheNumbers?.featuredRecipe}/>
                <Recipes {...allContentfulRecipe} />
            </InnerWrapper>
        </Layout>
    )
}

export default ByTheNumbers

export const ByTheNumbersQuery = graphql`
    query ByTheNumbersQuery {
        contentfulByTheNumbers(
            contentful_id: { eq: "7idhXLHme3PP5f6lcj1zLq" }
        ) {
            ...ByTheNumbers
        }
        allContentfulRecipe {
            edges {
                node {
                    ...Recipe
                }
            }
        }
    }
`
