import styled, { css } from 'styled-components'

const baseStyles = css`
  color: ${({ color }) => color || '#3b3c36'};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: 100%;
`

const StyledH1 = styled.h1`
    ${baseStyles} 
    font-family: Playfair Display;
    font-size: ${({ fontSize }) => fontSize || '32px'};
`

const StyledP = styled.p`
    ${baseStyles} 
    font-family: Montserrat;
    font-size: ${({ fontSize }) => fontSize || '14px'};
    line-height: 26px;
    letter-spacing: 2px;
`

export { StyledP, StyledH1 }
