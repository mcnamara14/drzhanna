import React from 'react'

import { Container, InnerContainer } from './styles'

const PageWrapper = () => {
    return (
        <Container type="flex" justify="center">
            <InnerContainer xs={18}>Wrapper</InnerContainer>
        </Container>
    )
}

export default PageWrapper
