/** @jsx jsx */
import {jsx} from '@emotion/core'
import styled from '@emotion/styled'
import {keyframes} from '@emotion/core'
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
  color: ${({theme}) => theme.colors.primary};
`

const spin = keyframes({
  '0%': {transform: 'rotate(0deg)'},
  '100%': {transform: 'rotate(360deg)'},
})

export function Spinner(props) {
  return (
    <LoadingIcon
      css={{animation: `${spin} 1s linear infinite`}}
      aria-label="loading"
      {...props}
    />
  )
}

const Loading = () => {
  return (
    <Container>
      <Spinner size={64} />
      <Heading size={2}>Loading&hellip;</Heading>
    </Container>
  )
}

export default Loading
