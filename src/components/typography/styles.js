import styled, { css } from 'styled-components'

const baseStyles = css`
  color: ${({ color }) => color || '#3b3c36'};
  line-height: 100%;
`

const StyledH1 = styled.h1`
    ${baseStyles} 
    font-family: Playfair Display;
    font-size: ${({ fontSize }) => fontSize || '36px'};
`

const StyledP = styled.p`
    ${baseStyles} 
    font-family: Montserrat;
    font-size: ${({ fontSize }) => fontSize || '12px'};
`

export { StyledP, StyledH1 }
