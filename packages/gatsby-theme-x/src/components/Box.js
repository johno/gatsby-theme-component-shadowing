import React from 'react'
import styled from '@emotion/styled'

import Relative from './Relative'

const Box = styled.div`
  padding: 80px;
  background-color: ${props => props.theme.colors.primary}
`

export default () => (
  <Box>
    <Relative />
  </Box>
)
