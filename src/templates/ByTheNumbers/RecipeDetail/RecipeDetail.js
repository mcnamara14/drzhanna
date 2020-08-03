import React from 'react'
import { Col, Row } from 'antd'
import InnerWrapper from '../../../components/InnerWrapper/InnerWrapper'
import Layout from '../../../components/layout'

import { Section } from './styles'

const RecipeDetail = props => {
    return (
        <Layout>
            <Section>
                <InnerWrapper>
                    <h1>Title</h1>
                </InnerWrapper>
            </Section>
        </Layout>
    )
}

export default RecipeDetail
