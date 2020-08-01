import React from 'react'

import { StyledP, StyledH1 } from './styles'

export const H1 = ({ children, fontSize, ...otherProps }) => {
    return (
        <StyledH1 fontSize={fontSize} {...otherProps}>
            {children}
        </StyledH1>
    )
}

export const P = ({ children, fontSize }) => {
  return (
      <StyledP fontSize={fontSize}>
          {children}
      </StyledP>
  )
}
