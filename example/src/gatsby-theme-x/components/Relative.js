import React from 'react'
import styled from '@emotion/styled'

import { theme } from 'gatsby-theme-x'

console.log(theme)

const Box = styled.div`
  padding: 10px;
  background-color: ${props => props.theme.colors.secondary}
`

export default () => (
  <Box>
    <h1>I'm shadowing</h1>
  </Box>
)