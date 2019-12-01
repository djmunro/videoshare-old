import React from 'react'
import styled from '@emotion/styled'

import Row from '../atoms/Row'
import Heading from '../atoms/Heading'

const Container = styled(Row)`
  justify-content: center;
  margin-top: 1em;
  margin-bottom: 1em;
`

const Title = () => (
  <Container>
    <Heading size={1}>Videoshare</Heading>
  </Container>
)

export default Title
