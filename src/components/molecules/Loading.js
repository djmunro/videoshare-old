import React from 'react'
import styled from '@emotion/styled'
import {Loader} from 'react-feather'

import Heading from '../atoms/Heading'

const Container = styled.div`
  width: 100%;
  text-align: center;
  padding: 2rem 0;
`

const LoadingIcon = styled(Loader)`
  opacity: 0.5;
  margin: 2rem;
  color: ${({theme}) => theme.colors.primary}
`

const Loading = () => {
  return (
    <Container>
      <LoadingIcon size={64} />
      <Heading size={2}>Loading&hellip;</Heading>
    </Container>
  )
}

export default Loading
