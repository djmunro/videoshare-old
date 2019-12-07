import React from 'react'
import styled from '@emotion/styled'
import {AlertTriangle} from 'react-feather'

import Heading from '../atoms/Heading'

const Container = styled.div`
  width: 100%;
  text-align: center;
  padding: 2rem 0;
`

const ErrorIcon = styled(AlertTriangle)`
  margin: 2rem;
  color: ${({theme}) => theme.colors.danger};
`

const Error = () => {
  return (
    <Container>
      <ErrorIcon size={64} />
      <Heading size={2}>An error has occured</Heading>
    </Container>
  )
}

export default Error
